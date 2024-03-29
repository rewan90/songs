import {
    ref
} from 'vue'
import {
    projectstorage
} from '../firebase/config'
import getUser from './getUser'

const {
    user
} = getUser()

const useStorage = () => {
    const error = ref(null)
    const url = ref(null)
    const filePath = ref(null)

    const uploadImage = async (file) => {
        filePath.value = `covers/${user.value.uid}/${file.name}`

        const storageRef = projectstorage.ref(filePath.value)

        try {
            const res = await storageRef.put(file)
            url.value = await res.ref.getDownloadURL()

        } catch (err) {
            console.log(err.massage)
            error.value = err.massage

        }
    }
    const deleteImage = async (path) => {
        const storageRef = projectstorage.ref(path);

        try {
            await storageRef.delete()
        } catch (err) {
            console.log(err.message)
            error.value = err
        }
    }

    return {
        uploadImage,
        deleteImage,
        url,
        filePath,
        error
    }
    }

    export default useStorage;
