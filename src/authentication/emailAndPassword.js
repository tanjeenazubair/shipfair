import { auth, db } from "../libraries/firebase"

const signInWithEmailAndPassword = async (email, password) => {
    try {
        await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
};

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const response = await auth.createUserWithEmailAndPassword(email, password);
        const user = response.user;
        await db.collection('users').add({
            uid: user.uid,
            name,
            authProvider: 'local',
            email,
        });
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
};

export { signInWithEmailAndPassword, registerWithEmailAndPassword}