import {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import appwriteService from '../appwrite/config'
import { Container, PostForm } from '../components'

function EditPost() {

    const [posts, setPosts] = useState(null)
    const slug = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(slug) {
            appwriteService.getPosts(slug).then((post) =>{
                if(post){
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
    

  return (
    <div className='py-8'>
        <Container>
            <PostForm post={posts} />
        </Container>
    </div>
  )
}

export default EditPost