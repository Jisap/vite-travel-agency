import Checkmark from "./Icons/Checkmark"


const FrequentTraveler = () => {
  return (
    <section>
      <div>
        <div>
          <h3>Learn About Our Frequent Traveler Program</h3>
          <p>
            Interested in saving up to $1000 on your next vacation? How about
            earning travel points that can be converted into rewards like extra
            nights, free meals, and exclusive offers from resorts around globe?
          </p>
        </div>

        <div className="bg-grey-500/40 block w-0.25 self-strech" />

        <form>
          <label>
            <p>Full Name</p>
            <input type="text" />
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