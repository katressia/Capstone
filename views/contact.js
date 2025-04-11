import html from "html-literal";

export default () => html`
  <section id="Contact">
    <h1>
      Contact information
    </h1>
    <p>
      I became a ordained Minister in 2023. Im a certified reiki practitioner. I
      have my own business in which I offer different things such as
      <li>chakra alignments</li>
      <li>tarot or oracle readings</li>
      <li>custom jewelry making</li>
      <li>mentorship</li>
    </p>
    <p>
      I can be contacted at my email address: Katressiac@gmail.com. I can also
      be contacted at my facebook or linkedin
    </p>
    <form action="" method="get" class="customer">
      <div class="customerinfo">
        <label for="name">Enter your name: </label>
        <input type="text" name="name" id="name" required />
      </div>
      <div class="chakrainfo">
        <label for="helpneeded">What would you need help with: </label>
        <input type="helpneeded" name="helpneeded" id="helpneeded" required />
      </div>
      <div class="form-example">
        <label for="email">Enter your email: </label>
        <input type="email" name="email" id="email" required />
      </div>
      <div class="submit">
        <input type="submit" value="Submit" />
      </div>
    </form>
    <a href="https://www.linkedin.com/in/katressia-moore-146a59239"
      >My linkedin</a
    >
    <a href="https://www.facebook.com/Kandikc">My facebook</a>
  </section>
`;
