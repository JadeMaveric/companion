import { useRouter } from 'next/router'
import { Fragment } from 'react'
import Query from '../../../components/query'
import COURSE_ID_QUERY from '../../../apollo/queries/course/course'
import Syllabus from '../../../components/courses/Syllabus'
import Error from 'next/error'

const SyllabusPage = () => {
    const router = useRouter()
    // course is the course ID
    const { courseId } = router.query

    return (
        <Fragment>

            <Query query={COURSE_ID_QUERY(courseId)}>
                {({ data: { courses } }) => {
                    if (courses.length == 0)
                        return <Error statusCode={404} title={"Couldn't find that course."} />
                    return <Syllabus {...courses[0]} />
                }}
            </Query>

        </Fragment>
    )
}


export default SyllabusPage