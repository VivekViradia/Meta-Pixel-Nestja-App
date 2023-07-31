import React from "react";

const DecorativeGuide = () => {
  return (
    <div>
      <section className='bg-white relative z-20 pt-20'>
        <div className='mainsection container bg-white mx-auto'>
          <div className='w-full'>
            <ul className='mt-4'>
              <li
                className='mb-4 last:mb-0 border border-light-gray'
                x-data='{ open: true }'
              >
                <button
                  className='w-full flex justify-between items-center text-left font-bold font-heading bg-[#f5f5f6] px-2 py-3 border-0 hover:border-0'
                  // @click.prevent="open = !open"
                  // :aria-expanded="open"
                  aria-expanded='false'
                >
                  <div className='text-lg md:text-xl lg:text-small-title font-small-title text-color-small-title'>
                    Custom branded corporate clothing
                  </div>
                  <span className='material-icons-outlined' x-show='!open'>
                    add_circle
                  </span>
                  <span className='material-icons-outlined'>remove_circle</span>
                </button>
                <div className='text-default-text font-default-text text-color-default-text px-2 pt-2 pb-4 border-t border-light-gray'>
                  <p>
                    A good business always searches for a competitive edge.
                    Branding is one of the primary ways to gain that advantage.
                  </p>
                  <p>
                    No matter how big or small a company is, marketing and
                    promotion need to be in their game plan. Companies are
                    becoming more creative about establishing their presence and
                    increasing brand recognition. The closer their brand gets to
                    people, the more it gets remembered.
                  </p>
                  <p>
                    Corporate Gear gives its customers exclusive, direct access
                    to custom branded clothing and accessories from iconic
                    premium sports and lifestyle brands. We’ve built close
                    relationships with some of the best-known clothing and
                    accessory providers in the world and we’ve introduced them
                    to our customers.
                  </p>
                  <p>
                    Our customers partner with these instantly recognizable
                    brands to produce high-quality corporate gear and swag at a
                    reasonable cost. Corporate Gear helps our customers design
                    and manufacture branded promotional apparel and accessories,
                    including T-shirts, uniforms, jackets, water bottles, bags,
                    and more.
                  </p>
                  <p>
                    Corporate Gear’s process is streamlined and smooth. It helps
                    us produce all your merchandise on short lead times and
                    tight deadlines. Our custom embroidered promotional clothing
                    and useful accessories are cost-efficiently manufactured
                    with quick turnaround times. We offer a low minimum for
                    product manufacturing and perform full quality and
                    environmental tests on each item we make.
                  </p>
                </div>
              </li>
              <li
                className='mb-4 last:mb-0 border border-light-gray'
                x-data='{ open: false }'
              >
                <button
                  className='w-full flex justify-between items-center text-left font-bold font-heading bg-[#f5f5f6] px-2 py-3 border-0 hover:border-0'
                  // @click.prevent="open = !open"
                  // :aria-expanded="open"
                  aria-expanded='false'
                >
                  <div className='text-lg md:text-xl lg:text-small-title font-small-title text-color-small-title'>
                    A wide selection of branded embroidered corporate clothing
                    and swag
                  </div>
                  <span className='material-icons-outlined' x-show='!open'>
                    add_circle
                  </span>
                  <span className='material-icons-outlined'>remove_circle</span>
                </button>
                <div
                  className='text-default-text font-default-text text-color-default-text px-2 pt-2 pb-4 border-t border-light-gray'
                  style={{ display: " none" }}
                >
                  <p>
                    Corporate Gear offers a full suite of promotional branding
                    services under one roof. Sales, design, creative work,
                    e-commerce services, and warehousing all take place at our
                    offices and facilities. Customers find our turnkey solution
                    more efficient and manageable, without the need for
                    excessive additional third parties for certain steps. It
                    also helps us keep our pricing reasonable and affordable.
                  </p>
                  <p>
                    You control every creative step in Corporate Gear’s
                    full-service process. You select the choice of clothing or
                    products, style and color, graphic design, decoration, use
                    of screen printing or embroidery, and more. Our employees
                    can guide and consult with you at every step in your order.
                  </p>
                </div>
              </li>
              <li
                className='mb-4 last:mb-0 border border-light-gray'
                x-data='{ open: false }'
              >
                <button
                  className='w-full flex justify-between items-center text-left font-bold font-heading bg-[#f5f5f6] px-2 py-3 border-0 hover:border-0'
                  // @click.prevent="open = !open"
                  // :aria-expanded="open"
                  aria-expanded='false'
                >
                  <div className='text-lg md:text-xl lg:text-small-title font-small-title text-color-small-title'>
                    Outerwear: A Trending Brand Influence
                  </div>
                  <span className='material-icons-outlined' x-show='!open'>
                    add_circle
                  </span>
                  <span className='material-icons-outlined'>remove_circle</span>
                </button>
                <div
                  className='text-default-text font-default-text text-color-default-text px-2 pt-2 pb-4 border-t border-light-gray'
                  style={{ display: " none" }}
                >
                  <div className='mb-2'>
                    Today&apos;s outerwear is also today&apos;s professional
                    wear. The lines have blurred for the better! It can&apos;t
                    be overstated: The quality and feel of a customized jacket,
                    with your brand logo, sends an instant message that your
                    brand strongly values high-standards and success.
                  </div>
                  <div>
                    Outerwear is versatile and works with almost any style of
                    clothing. It&apos;s also one of the most powerful branding
                    items because of its usage-frequency. Your recipients will
                    choose to wear your custom jacket from top-name brands. We
                    have seen from experience that brands that make the
                    investment in high-quality custom jackets, custom fleeces,
                    or vests invariably find that these get a lot of traction,
                    and more impressions, which raise brand-recognition.
                    Outerwear brands everyone loves, with your custom logo are a
                    smart, effective option, then, to strengthen your brand
                    persona. We&apos;ve found this is true for both small
                    businesses and enterprise organizations.
                  </div>
                </div>
              </li>
              <li
                className='mb-4 last:mb-0 border border-light-gray'
                x-data='{ open: false }'
              >
                <button
                  className='w-full flex justify-between items-center text-left font-bold font-heading bg-[#f5f5f6] px-2 py-3 border-0 hover:border-0'
                  // @click.prevent="open = !open"
                  // :aria-expanded="open"
                  aria-expanded='false'
                >
                  <div className='text-lg md:text-xl lg:text-small-title font-small-title text-color-small-title'>
                    Custom Golf Gear: Luxury, Classic Brand Impact
                  </div>
                  <span className='material-icons-outlined' x-show='!open'>
                    add_circle
                  </span>
                  <span className='material-icons-outlined'>remove_circle</span>
                </button>
                <div
                  className='text-default-text font-default-text text-color-default-text px-2 pt-2 pb-4 border-t border-light-gray'
                  style={{ display: " none" }}
                >
                  <div>
                    Custom golf apparel is another category of custom clothing
                    and gear that has also found its way front-and-center into
                    the corporate professional office-wear. Customized golf
                    polos, golf balls, and custom golf bags are also standard
                    promotional schwag. Quality-first custom golf gifts and gear
                    will stand-out at promotional events, from golf tournaments
                    to conventions. Corporate Gear is a direct partner with
                    select golf apparel and gear brands, and can ensure that
                    customizations on high-quality golf polos, and shirts are
                    well-executed (to a tee!).
                  </div>
                </div>
              </li>
              <li
                className='mb-4 last:mb-0 border border-light-gray'
                x-data='{ open: false }'
              >
                <button
                  className='w-full flex justify-between items-center text-left font-bold font-heading bg-[#f5f5f6] px-2 py-3 border-0 hover:border-0'
                  // @click.prevent="open = !open"
                  // :aria-expanded="open"
                  aria-expanded='false'
                >
                  <div className='text-lg md:text-xl lg:text-small-title font-small-title text-color-small-title'>
                    Custom Sports Apparel and Gear: The Positive Impact for
                    Professional Brands
                  </div>
                  <span className='material-icons-outlined' x-show='!open'>
                    add_circle
                  </span>
                  <span className='material-icons-outlined'>remove_circle</span>
                </button>
                <div
                  className='text-default-text font-default-text text-color-default-text px-2 pt-2 pb-4 border-t border-light-gray'
                  //
                  style={{ display: " none" }}
                >
                  <div className='mb-6'>
                    Athleisure is the cross between high-performing athletic
                    wear and style that works in settings other than the gym,
                    trail, or on the field. But in order to make the jump from
                    active to office-wear, today&apos;s consumers desire a
                    sophisticated-level of quality for sports apparel. They want
                    to feel comfortable wearing a piece to the office, or during
                    the workday, that looks like it&apos;s suited for a
                    professional environment. Corporate Gear has offered a
                    select number of premium brands that have trailblazed this
                    unique, practical demand.
                  </div>
                  <div className='mb-6'>
                    The difference is in the quality and style options. As
                    organizations move more toward a casual professional style,
                    on one day of the week, or continue a hybrid-remote-office
                    structure, these custom sporting apparel choices are
                    perfectly comfortable, but also offer structure and
                    professionalism at the same time. Form-fitting, custom,
                    stylish fleeces, for instance, make a smart and comfortable
                    silhouette as custom employee clothing. Additionally, custom
                    sporting goods and gear are an unquestionably strong staple
                    for often-used custom backpacks, and bags.
                  </div>
                  <div>
                    Custom sporting apparel has a positive impact that’s similar
                    to team benefits, for the office. This type of custom
                    apparel engenders the same sense of positive
                    community-building, competitive edge, and success as it does
                    for a sports team. But it&apos;s the name-brand quality that
                    sets that positive bar for your brand.
                  </div>
                </div>
              </li>
              <li
                className='mb-4 last:mb-0 border border-light-gray'
                x-data='{ open: false }'
              >
                <button
                  className='w-full flex justify-between items-center text-left font-bold font-heading bg-[#f5f5f6] px-2 py-3 border-0 hover:border-0'
                  // @click.prevent="open = !open"
                  // :aria-expanded="open"
                  aria-expanded='false'
                >
                  <div className='text-lg md:text-xl lg:text-small-title font-small-title text-color-small-title'>
                    Custom Premium Accessories: Boost Promotional Events
                  </div>
                  <span className='material-icons-outlined' x-show='!open'>
                    add_circle
                  </span>
                  <span className='material-icons-outlined'>remove_circle</span>
                </button>
                <div
                  className='text-default-text font-default-text text-color-default-text px-2 pt-2 pb-4 border-t border-light-gray'
                  style={{ display: " none" }}
                >
                  <div className='mb-6'>
                    Premium accessories are the right option for promotional
                    events, and products. Swag should be a quality gift.
                    Recipients no longer want a toss-away item (did they ever?).
                    Your brand is expected to meet a customer or client&apos;s
                    current expectation. Your employees, colleagues, and
                    recipients will appreciate their custom, quality tumblers,
                    backpacks, and coolers from well-loved brands. Corporate
                    Gear’s quality selection is strategic to ensure that what
                    your custom order garners repeated uses. We know that’s the
                    goal. Tumblers that keep coffee hot for hours,
                    laser-engraved with your custom logo, are a great example.
                    Custom backpacks that are stylish and durable will be the
                    first choice to use, because they feel great–and work great.
                  </div>
                  <div>
                    Our quality selection makes it easy. You’ll never have to
                    forgo quality for the items you want. Customize your logo on
                    top name-brand promotional products, and customize premium
                    corporate gifts. You can shop bags, company hats, custom
                    backpacks, corporate drinkware, and custom electronics, then
                    we&apos;ll customize your brand logo to perfection.
                  </div>
                </div>
              </li>
              <li
                className='mb-4 last:mb-0 border border-light-gray'
                x-data='{ open: false }'
              >
                <button
                  className='w-full flex justify-between items-center text-left font-bold font-heading bg-[#f5f5f6] px-2 py-3 border-0 hover:border-0'
                  // @click.prevent="open = !open"
                  // :aria-expanded="open"
                  aria-expanded='false'
                >
                  <div className='text-lg md:text-xl lg:text-small-title font-small-title text-color-small-title'>
                    Online Ordering for Every-Size Business
                  </div>
                  <span className='material-icons-outlined' x-show='!open'>
                    add_circle
                  </span>
                  <span className='material-icons-outlined'>remove_circle</span>
                </button>
                <div
                  className='text-default-text font-default-text text-color-default-text px-2 pt-2 pb-4 border-t border-light-gray'
                  style={{ display: " none" }}
                >
                  <div className='mb-2'>
                    For Corporate Gear customers, your marketing is never a
                    one-size-fits-all approach to reaching customers and new
                    clients. We seek to meet every brand&apos;s need. Our
                    selection of corporate gear, customized promotional
                    accessories, and corporate branded clothing is decidedly
                    versatile, to meet your brand marketing goals. You’ll find
                    that your online ordering and customization experience
                    reflects that. For any size business, your order process
                    will include:
                  </div>
                  <div className='mb-2 ml-6'>
                    <ul className='list-disc'>
                      <li>Hassle-free process</li>
                      <li>Low minimum order quantities</li>
                      <li>
                        Intuitive customization tools for color, design, size,
                        and quantity selection
                      </li>
                    </ul>
                  </div>
                  <div className='mb-2'>
                    Once you’ve customized your perfect selection, Corporate
                    Gear provides free shipping on your premium customized
                    apparel and accessories, which are delivered right to your
                    door!
                  </div>
                  <div>
                    Flexible return policy - In the unlikely event that the
                    product you receive is damaged or incorrect, our helpful and
                    knowledgeable staff are always available to assist in making
                    it right. Corporate Gear can refund damaged items, as well
                    as some pieces that were customized incorrectly. However,
                    our service team is here every step of the way to help you
                    address any order or customization question you have.
                  </div>
                </div>
              </li>
              <li
                className='mb-4 last:mb-0 border border-light-gray'
                x-data='{ open: false }'
              >
                <button
                  className='w-full flex justify-between items-center text-left font-bold font-heading bg-[#f5f5f6] px-2 py-3 border-0 hover:border-0'
                  // @click.prevent="open = !open"
                  // :aria-expanded="open"
                  aria-expanded='false'
                >
                  <div className='text-lg md:text-xl lg:text-small-title font-small-title text-color-small-title'>
                    Enhanced Experience with Full-Service Support
                  </div>
                  <span className='material-icons-outlined' x-show='!open'>
                    add_circle
                  </span>
                  <span className='material-icons-outlined'>remove_circle</span>
                </button>
                <div
                  className='text-default-text font-default-text text-color-default-text px-2 pt-2 pb-4 border-t border-light-gray'
                  style={{ display: " none" }}
                >
                  <div className='mb-2'>
                    When you order with Corporate Gear, your customization
                    service happens in-house, on-premise, for a full-service,
                    responsive experience. We specialize in services that
                    include, but are not limited to, screen printing,
                    embroidery, laser-engraving, and heat press. Embroidered
                    decorations can span an array of color options, while
                    corporate embellishments on apparel and products can be
                    personalized for a subtle, or stand-out result, to best
                    highlight your brand logo and company.
                  </div>
                  <div className='mb-2'>
                    You&apos;ll feel the difference in having a full-service,
                    in-house team for your custom corporate apparel and logo
                    orders.
                  </div>
                  <div className='mb-2'>
                    The process is more personalized, immediate, and personable.
                    It enables us to respond faster, to make adjustments on the
                    fly when needed, and execute on any-sized order with better
                    results.
                  </div>
                  <div>
                    We are more agile, and can ensure you&apos;re a greater part
                    of the process, if that&apos;s what you prefer. From order
                    updates, to inquiries on customization changes, our
                    full-service model is a key to why customers return, and
                    love their results.
                  </div>
                </div>
              </li>
              <li
                className='mb-4 last:mb-0 border border-light-gray'
                x-data='{ open: false }'
              >
                <button
                  className='w-full flex justify-between items-center text-left font-bold font-heading bg-[#f5f5f6] px-2 py-3 border-0 hover:border-0'
                  // @click.prevent="open = !open"
                  // :aria-expanded="open"
                  aria-expanded='false'
                >
                  <div className='text-lg md:text-xl lg:text-small-title font-small-title text-color-small-title'>
                    Custom Branding and Large Orders
                  </div>
                  <span className='material-icons-outlined' x-show='!open'>
                    add_circle
                  </span>
                  <span className='material-icons-outlined'>remove_circle</span>
                </button>
                <div
                  className='text-default-text font-default-text text-color-default-text px-2 pt-2 pb-4 border-t border-light-gray'
                  style={{ display: " none" }}
                >
                  <div className='mb-2'>
                    Our commitment to your business is that large orders should
                    not equate to large hassles. Not only that, but your
                    business should benefit from large-orders in pricing,
                    without the hassle of lengthy shipment timelines. We do our
                    best to ensure you have the order you desire, within a
                    reasonable timeline. It’s not uncommon for us to be in touch
                    with our customers frequently to ensure we’re meeting your
                    order expectations.
                  </div>
                  <div className='mb-2'>
                    Corporate Gear is also committed to anticipating and guiding
                    our customers around shipping delays due to market or
                    supply-line shortfalls. We go the distance behind the
                    scenes, working with our premium brand partners, to
                    orchestrate the best order timelines, customization options,
                    and inventory upkeep.
                  </div>
                  <div>
                    Large orders receive the same level of customization detail
                    and service as a small-batch run, no matter the type of
                    customization. You’ll also benefit from smart savings, and
                    expert guidance so surplus and the right item-quantity are
                    not an issue.
                  </div>
                </div>
              </li>
              <li
                className='mb-4 last:mb-0 border border-light-gray'
                x-data='{ open: false }'
              >
                <button
                  className='w-full flex justify-between items-center text-left font-bold font-heading bg-[#f5f5f6] px-2 py-3 border-0 hover:border-0'
                  // @click.prevent="open = !open"
                  // :aria-expanded="open"
                  aria-expanded='false'
                >
                  <div className='text-lg md:text-xl lg:text-small-title font-small-title text-color-small-title'>
                    Custom Branding Services for Small Businesses
                  </div>
                  <span className='material-icons-outlined' x-show='!open'>
                    add_circle
                  </span>
                  <span className='material-icons-outlined'>remove_circle</span>
                </button>
                <div
                  className='text-default-text font-default-text text-color-default-text px-2 pt-2 pb-4 border-t border-light-gray'
                  style={{ display: " none" }}
                >
                  <div className='mb-2'>
                    Our low-ordering minimums make it easy to create your order
                    for your business and marketing needs. Additionally, free
                    shipping provides a cost-effective route to getting your
                    order to your front door.
                  </div>
                  <div className='mb-2'>
                    Our pricing is in reach for small and local, to start-up,
                    and service businesses. Because we’ve been in business for
                    many years, we have developed partnerships and pricing
                    models that ensure the quality brands you love are available
                    for your small business. These are priced to fit your
                    budget. Even better, all-inclusive pricing takes all of the
                    surprises out of online ordering with Corporate Gear.
                  </div>
                  <div>
                    At Corporate Gear, we employ a long-time staff of pros who
                    can expertly decorate your existing logo or create a custom
                    design that’s one-of-a-kind. We don’t just take an order
                    never to be heard from, we ensure a responsive process
                    throughout your experience with us. You can reach us by
                    phone, email, or by chat, and we typically reply instantly
                    or within a few hours, like any local service.
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DecorativeGuide;
