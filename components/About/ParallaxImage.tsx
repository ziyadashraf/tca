
import img from "@/public/images/FormPic.png"

const ParallaxImage = () => {
    return (
        <div
            style={{
                height: '100vh',
                backgroundImage: `url(${img.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
            }}
        >ParallaxImage

        </div>
    )
}

export default ParallaxImage