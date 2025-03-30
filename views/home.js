import html from "html-literal";

export default (state) => html`
  <section id="jumbotron">
    <h2>Breathe Easy</h2>
    <a href="index.html">"Call to Action" "Button"</a>
  </section>
  <h3>
    The weather in ${state.weather.city} is ${state.weather.description}.
    Temperature is ${state.weather.temp}F, and it feels like
    ${state.weather.feelsLike}F.
  </h3>
  <h1>
    Welcome to Breathe Easy
  </h1>
  <p>
    Stress and anxiety are very prevalent in todays society. Hopefully I can
    help you conquer those triggers with tips on meditation and working with
    your chakras.
  </p>
`;
