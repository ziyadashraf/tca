import { InformationCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import FormPic from '@/public/images/FormPic.png'

export default function Projects() {
    return (
        <div>
            <Image
                alt=""
                src={FormPic}
                className="aspect-video  w-full h-60 bg-gray-50 object-cover brightness-50"
            />
            <div className="bg-white px-6 py-24 lg:px-8">
                <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                    <p className="text-base font-semibold leading-7 text-gray-600">Introducing</p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Project Title</h1>

                    <figure className="mt-16">
                        <Image
                            alt=""
                            src={FormPic}

                            className="aspect-video  bg-gray-50 object-cover"
                        />
                        <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
                            <InformationCircleIcon aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none text-gray-300" />
                            Faucibus commodo massa rhoncus, volutpat.
                        </figcaption>
                    </figure>
                    <div className="mt-10 max-w-2xl">


                        <p className="mt-8">
                            Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                            fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                            adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                        </p>

                    </div>
                    <figure className="mt-16">
                        <Image
                            alt=""
                            src={FormPic}
                            className="aspect-video  bg-gray-50 object-cover"
                        />
                        <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
                            <InformationCircleIcon aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none text-gray-300" />
                            Faucibus commodo massa rhoncus, volutpat.
                        </figcaption>
                    </figure>
                    <div className="mt-16 max-w-2xl">

                        <p className="mt-8">
                            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
                            sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
