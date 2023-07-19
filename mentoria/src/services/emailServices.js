import axios from "../api/api"

async function sendEmail(contact){
    try {
        const res=await axios.post('/',contact)

        const data=res.data

        return data

    } catch (error) {
        return error.response.data
    }
}

export default sendEmail