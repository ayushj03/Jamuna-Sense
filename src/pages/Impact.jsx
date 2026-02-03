import { useEffect } from "react";
import "./Impact.css";

const Impact = () => {
  useEffect(() => {
    const rows = document.querySelectorAll(".chat-row");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    rows.forEach((row) => observer.observe(row));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="did-you-know">
      <h2 className="dyk-title">Did You Know? 💬</h2>
      <p className="dyk-subtitle">
        Learn about Yamuna pollution through a simple conversation.
      </p>

      <div className="chat">

        <div className="chat-row left">
          <div className="avatar girl">💧</div>
          <div className="bubble girl">
            Why is the Yamuna River so polluted in Delhi?
          </div>
        </div>

        <div className="chat-row right">
          <div className="bubble boy">
            Because a large amount of untreated sewage is released into the river
            from the city.
          </div>
          <div className="avatar boy">🌊</div>
        </div>

        <div className="chat-row left">
          <div className="avatar girl">💧</div>
          <div className="bubble girl">
            What causes the white foam we sometimes see?
          </div>
        </div>

        <div className="chat-row right">
          <div className="bubble boy">
            The foam is caused by detergents and chemicals present in wastewater.
          </div>
          <div className="avatar boy">🌊</div>
        </div>

        <div className="chat-row left">
          <div className="avatar girl">💧</div>
          <div className="bubble girl">
            Can the Yamuna ever become clean again?
          </div>
        </div>

        <div className="chat-row right">
          <div className="bubble boy">
            Yes! If sewage is treated properly and people stop polluting the river,
            the Yamuna can recover.
          </div>
          <div className="avatar boy">🌊</div>
        </div>

      </div>
    </section>
  );
};

export default Impact;
