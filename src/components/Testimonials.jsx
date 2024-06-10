

const Testimonials = () =>{
    return(
        <div id="testimonials">
            <h2>Testimonials</h2>
            <section>
                <TestimonialCard name = {"Ichchhit Bajaj"} feedback = {"Ashish is a remarkable video editor whose knack for blending visuals and sound transforms simple footage into compelling stories. His expertise in software like Adobe Premiere Pro and Adobe After Effects and a keen eye for detail have consistently elevated our projects, making them not just seen, but felt by the audience. Professional, creative, and always on point with deadlines, Ashish is the go-to for any video editing needs. His work truly speaks for itself, turning visions into engaging, high-quality video content. Highly recommended for any project requiring a skilled touch and creative flair."}/>
                <TestimonialCard name = {"Sayyed Arhan"} feedback = {"write something here about me "}/>
                <TestimonialCard name = {"Ashish Singh"} feedback = {"write something here about me "}/>
            </section>
        </div>
    )
}

const TestimonialCard = ({name, feedback}) => (
    <article>
        <img src = "https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user"/>
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>

)


export default Testimonials