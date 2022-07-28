import {
    ref
} from 'vue'
import {
    projectAuth
} from '../firebase/config'


const error = ref(null)
const isPending = ref(false)


const Signup = async (email, password, displayName) => {
    error.value = null
    isPending.value = true

    try {
        const res = await projectAuth.createUserWithEmailAndPassword(email, password)
        if (!res) {
            throw new Error('Could not complete ');
        }
        await res.user.updateProfile({
            displayName
        })
        error.value = null
        isPending.value = false

        return res
    } catch (err) {
        console.log(err.message)
        error.value = err.message
        isPending.value = false
    }
}

const use = () => ({
    error,
    Signup,
    isPending
});

export default use;
