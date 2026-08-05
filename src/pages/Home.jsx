import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page-exact">
      <div className="home-container">

        {/* Our Story */}
        <section className="our-story-section">
          <h2>Our story</h2>

          <p>
            We believe in good. We launched Fresh Pan Pizza Best Excuse Awards
            on our Facebook fan page. Fans were given situations where they had
            to come up with wacky and fun excuses. The person with the best
            excuse won the Best Excuse Badge and won Pizzeria's vouchers. Their
            enthusiastic response proved that Pizzeria's Fresh Pan Pizza is the
            Tastiest Pan Pizza. Ever!
          </p>

          <p>
            Ever since we launched the Tastiest Pan Pizza, ever, people have
            not been able to resist the softest, cheesiest, crunchiest,
            butteriest Fresh Pan Pizza.
          </p>

          <p>
            We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan
            page. Fans were given situations where they had to come up with
            wacky and fun excuses. The person with the best excuse won the Best
            Excuse Badge and won Pizzeria vouchers.
          </p>
        </section>

        {/* Grid Section */}
        <section className="home-grid">

          {/* Row 1 */}
          <div className="grid-item">
            <img
              src="/ingredients.png"
              alt="Ingredients"
              onError={(e) =>
                (e.target.src =
                  "https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=2070&auto=format&fit=crop")
              }
            />
          </div>

          <div className="grid-item text-item">
            <h2>Ingredients</h2>
            <p>
              We're ruthless about goodness. We have no qualms about tearing up
              a day-old lettuce leaf, steaming a baby carrot, chopping, stirring
              and cooking while everything is still fresh. That's our motto.
            </p>
          </div>

          {/* Row 2 */}
          <div className="grid-item text-item">
            <h2>Our Chefs</h2>
            <p>
              They make sauces sing and salads dance. They create magic with
              skill, passion and experience. Every pizza is prepared with care
              and delivered fresh.
            </p>
          </div>

          <div className="grid-item">
            <img
              src="/chefs.png"
              alt="Our Chefs"
              onError={(e) =>
                (e.target.src =
                  "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1977&auto=format&fit=crop")
              }
            />
          </div>

          {/* Row 3 */}
          <div className="grid-item text-item">
            <h2>30 min delivery</h2>
            <p>
              Freshly baked pizzas delivered to your doorstep in just 30
              minutes. Fast, hot and delicious every time.
            </p>
          </div>

          <div className="grid-item">
            <img
              src="/Timer.jpg"
              alt="30 min delivery"
              onError={(e) =>
                (e.target.src =
                  "https://images.unsplash.com/photo-1578326264669-02685714dcbe?q=80&w=2003&auto=format&fit=crop")
              }
            />
          </div>

        </section>

      </div>
    </div>
  );
};

export default Home;