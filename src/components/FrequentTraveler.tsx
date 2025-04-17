import Checkmark from "./Icons/Checkmark"


const FrequentTraveler = () => {
  return (
    <section className="bg-primary-100 px-24 py-36">
      <div className="border-y-grey-500/40 m-auto flex max-w-389 items-center justify-between gap-x-28 border-y-1 py-26">
        <div className="basis-150 text-center">
          <h3 className="tracking-6 mb-9.5 text-[1.75rem]/14 font-semibold">
            Learn About Our Frequent Traveler Program
          </h3>
          <p className="text-grey-800 text-base/13.5">
            Interested in saving up to $1000 on your next vacation? How about
            earning travel points that can be converted into rewards like extra
            nights, free meals, and exclusive offers from resorts around globe?
          </p>
        </div>

        <div className="bg-grey-500/40 block w-0.25 self-stretch" />

        <form className="flex flex-col basis-150">
          <label className="mb-8">
            <p className="tracking-6 mb-3 text-lg/9.5">
              Full Name
            </p>
            <input 
              type="text" 
              required
              name="fullName"
              minLength={2}
              maxLength={50}
              placeholder="John Doe"
              className="placeholder:text-grey-400 w-full rounded-lg bg-white py-3.5 pl-4 
              transition-all duration-200 placeholder:font-light focus:outline-1 disabled:opacity-50"
            />
          </label>

          <label>
            <p>Email</p>
            <input type="email" />
          </label>

          <div>
            <label>
              <button>
                <Checkmark className="size-2" />
              </button>
              <p> Agree to receive promotional email updates</p>
            </label>

            <button>Learn More</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default FrequentTraveler