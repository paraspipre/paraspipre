import { useRouter } from 'next/router';
import React from 'react'

const SingleProject = () => {
   const router = useRouter()
   const {query} = router
  return (
     <div>
        {query.project}
    </div>
  )
}

export default SingleProject;