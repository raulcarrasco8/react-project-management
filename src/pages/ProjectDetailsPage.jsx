import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { BASE_URL } from "../config/api"
import Loader from "../components/Loader"
import axios from "axios"

function ProjectDetailsPage() {

    const [project, setPoject] = useState(null)

    const { projectId } = useParams()

    useEffect(() => {

        axios.get(`${BASE_URL}/projects/${projectId}`)
            .then(response => {
                setPoject(response.data)
            })
            .catch((error) => console.log("Error getting project details from the API...", error));
    }, [projectId])

    if (project === null) {
        return <Loader />
    }

    return(
        <div className="ProjectDetailsPage">
            <h1>{project.title}</h1>
            <p>{project.description}</p>

            <Link to="/projects">
                <button>Back to projects</button>
            </Link>

        </div>
    )
}

export default ProjectDetailsPage