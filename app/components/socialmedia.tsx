export default function SocialMedia() {
    const socialMedia = [
        {
            name: "Facebook",
            icon: "facebook",
            link: "https://www.facebook.com/htnbygg",
            class: 'mx-2',
            iconClass: 'w-10 h-10'
        },
        {
            name: "Instagram",
            icon: "instagram",
            link: "https://www.instagram.com/htnbygg",
            class: 'mx-2',
            iconClass: 'w-10 h-10'
        },
        {
            name: "TikTok",
            icon: "tiktok",
            link: "https://www.tiktok.com/@htnbygg",
            class: 'mx-2 bg-white p-1 rounded',
            iconClass: 'w-8 h-8'
        }
    ]

    return (
        <div className="py-16 flex flex-col gap-8">
            <h4 className="text-center text-xl font-semibold mt-8">Følg oss på sosiale medier</h4>

            <div className="flex justify-center gap-2">
                {socialMedia.map((social) => (
                    <a key={social.name} href={social.link} target="_blank" rel="noreferrer" className={social.class}>
                        <img src={`/icons/${social.icon}.svg`} alt={social.name} className={social.iconClass}/>
                    </a>
                ))}
            </div>
        </div>
    )
}