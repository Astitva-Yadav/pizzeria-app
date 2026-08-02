import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page-exact">
      <div className="home-container">
        
        <section className="our-story-section">
          <h2>Our story</h2>
          <p>
            We believe in good. We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page. Fans were given situations where they had to come up with wacky and fun excuses. The person with the best excuse won the Best Excuse Badge and won Pizzeria's vouchers. Their enthusiastic response proved that Pizzeria's Fresh Pan Pizza is the Tastiest Pan Pizza. Ever!
          </p>
          <p>
            Ever since we launched the Tastiest Pan Pizza, ever, people have not been able to resist the softest, cheesiest, crunchiest, butteriest Domino's Fresh Pan Pizza. They have been leaving the stage in the middle of a performance and even finding excuses to be disqualified in a football match.
          </p>
          <p>
            We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page. Fans were given situations where they had to come up with wacky and fun excuses. The person with the best excuse won the Best Excuse Badge and won Domino's vouchers. Their enthusiastic response proved that Pizzeria's Fresh Pan Pizza is the Tastiest Pan Pizza. Ever!
          </p>
        </section>

        <section className="home-grid">
          <div className="grid-item">
            <img src="/ingredients.png" alt="Ingredients" onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=2070&auto=format&fit=crop'} />
          </div>
          <div className="grid-item text-item">
            <h2>Ingredients</h2>
            <p>
              We're ruthless about goodness. We have no qualms about tearing up a day-old lettuce leaf (straight from the farm), or steaming a baby (carrot). Cut. Cut. Chop. Chop. Steam. Steam. Stir Stir. While they're still young and fresh - that's our motto. It makes the kitchen a better place.
            </p>
          </div>

          <div className="grid-item text-item">
            <h2>Our Chefs</h2>
            <p>
              They make sauces sing and salads dance. They create magic with skill, knowledge, passion, and stirring spoons (among other things). They make goodness so good, it doesn't know what to do with itself. We do though. We send it to you.
            </p>
          </div>
          <div className="grid-item">
            <img src="/chefs.png" alt="Our Chefs" onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1977&auto=format&fit=crop'} />
          </div>

          <div className="grid-item">
            <img src="/delivery.png" alt="45 min delivery" onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1578326264669-02685714dcbe?q=80&w=2003&auto=format&fit=crop'} />
          </div>
          <div className="grid-item text-item">
            <h2>45 min delivery</h2>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;
