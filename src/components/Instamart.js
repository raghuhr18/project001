import { useState } from "react"

const Section = ({title, description}) => {

    const [isVisible ,setIsvisible] = useState(false)
    return(
        <div className="p-2 m-2 border border-indigo-600">
            <h1 className="font-bold">{title}</h1>
            {
            isVisible ?
                <button className="cursor-pointer" onClick={() => setIsvisible(false)}>Hide</button>: 
                <button className="cursor-pointer" onClick={() => setIsvisible(true)}>Show</button>
            }


            {isVisible && <p>{description}</p>}
        </div>

    )
}
const Instamart = () => {
    return(
        <>
            <div>
                <h1 className="text-3xl font-bold p-2 m-2">Instamart</h1>
                <Section title={"About Instamart"} 
                description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/>
            </div>
            <div>
                <Section title={"Team Instamart"} 
                description={"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}/>
            </div>
            <div>
                <Section title={"Careers"} 
                description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "}/>
            </div>
            <div>
                <Section title={"Task Instamart"} 
                description={"Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,"}/>
            </div>
        </>
    )
}
export default Instamart;