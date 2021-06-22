import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Mobile notifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: AnnotationIcon,
  },
]


function contact() {
    return (
        <div>
        <div className="py-12 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-700 font-semibold tracking-wide uppercase">Transactions</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              A better way to send money
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
              accusamus quisquam.
            </p>
          </div>
  
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-700 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-white">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 items-center justify-center lg:flex-row flex-col">
          <div className="w-96 h-48 bg-blue-700 rounded-2xl text-center  mb-10 lg:mr-20">
              <h1 className="text-2xl font-extrabold my-2">Advertising</h1>
              <p className="leading-6 font-medium text-white p-3">Want to promote your project? We offer Promoted Coin spots and Banner Ad spots. For prices and information, please email us at:</p>
              <div className="w-72 h-auto bg-white rounded-full ml-12">
                  <a className="text-blue-700 font-extrabold" href="mailto:advertising@coinshooter.com">advertising@coinshooter.com</a>
              </div>
          </div>
          <div className="w-96 h-48 bg-blue-700 rounded-2xl text-center mb-10 ">
              <h1 className="text-2xl font-extrabold my-2">General Support</h1>
              <p className="leading-6 font-medium text-white p-3">For general questions, or to update coin information, please email us at:</p>
              <div className="w-72 h-auto bg-white rounded-full ml-12">
                  <a className="text-blue-700 font-extrabold" href="mailto:info@coinshooter.com">info@coinshooter.com</a>
              </div>
          </div>
      </div>
      </div>
    )
}

export default contact
