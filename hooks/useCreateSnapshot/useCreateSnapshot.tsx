import axios from "axios"
import { useState } from "react"

const useCreateSnapshot = () => {
  const [creatingSnapshot, setCreatingSnapshot] = useState(false)
  const [submitText, setSubmitText] = useState('Submit')
  const createSnapshot = async (address: string, balances: any) => {
    try {
      setCreatingSnapshot(true)

      const response = await axios.post('/api/balances', {
        data: {
          address,
          balances
        }
      })

      if(!response.data.stored) throw new Error('Falied to create snapshot')

      setCreatingSnapshot(false)
      setSubmitText('Submitted!')
    } catch (e) {
      // TODO: Handle Error
      setCreatingSnapshot(false)
    }
  }

  return {
    createSnapshot,
    creatingSnapshot,
    submitText
  }
}

export default useCreateSnapshot;