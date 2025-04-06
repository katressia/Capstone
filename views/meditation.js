import html from "html-literal";

export default () => html`
  <section id="meditation">
  <h1>Meditation</h1><h2>Intro on Meditation</h2><p>
  Meditation is a mental exercise that trains your mind and body on attention and awareness. Meditation has been shown to increase focus, reduce stress, and help calmness. It can help people recognize and accept negative emotions.
</p><p>
    There are different types of meditation. We will be focusing on mindfulness meditation. In this type of meditation, one turns their attention to a single point of reference, such as one’s breath or bodily sensations, or a word or phrase known as a mantra. The practice has been shown to decrease distraction and rumination, make negative automatic thoughts seem easier to let go of, and promote greater enjoyment of the present moment.

    <h2>Chakra Meditation</h2>
    <p>
      Chakra meditation is an Eastern spiritual practice that dates back thousands of years. “Chakra” is a Sanskrit word that means “circle,” "disc," or "wheel".There are seven chakras in total, positioned from the base of the spine to the top of the head. Chakra meditation helps us realign the chakras and bring our body back into balance. When the chakras are aligned and activated, they vibrate at a higher frequency, giving us energy and vitality.
    </p>
    <h2>The Seven Chakras</h2>
    <div id="chakras">
      <img id="chakras" src="https://cdn.shopify.com/s/files/1/2318/2543/files/ChakraClearWhiteClear_1024x1024.png?v=1615700134"
      width="850"
      height="700"/>
    <h3> Crown Chakra </h3>
    <img id="crown" src="data:image/jpeg;base64,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48dbvgfN8WjpJ5HjMF1G8wOqKeA9Vui2ftB/hkc3Fo+a5bDEemjYQQekYCDkfiGoXpKvJncNSCsWDZMDOZ1fyNyHi7XyorHBA1gwsaGt4AUWxF58s7l7UREWQREQEREGURFBhERUEREBERAREQF8hgrioK0pWmdOFfEr6RAVUvzZs1MkAy1MfD9P08la0WscrjdwebWK2yQuqwlp3tOh5OCuly30ycU+GQat4828Qvq97mjnFSMMm5417ncQqTNFJBJQ9WRpqCPQjiCu/wAeWftF5ve9mQNq7N5+Fg1PM8BzVJvG85JjV5y3MHwjuHHmviR8k8lTV0jzkPYDgArjc1xMhAc6jpfxbm/p+uqax4559iGuTZxzyHzDCzcztO7+A9VcGtAAAFANANwWUXHPO5XyrRNZGPc1zmguaQWu3gjMZ/Jb0RYBERAREQEREBERBlERQYREVBERAREQEREBERAREQFD7R3X00eJo+0ZXD+Yb2/Tn3qYRWWy7ggNlbq6NvTPHXcMgey36n6KfRFcsrld0ERFkEREBERAREQEREBERBlERQYREVBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERBlERQZREUQREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQZREQf/2Q=="
    width="200"
     height="200">
    <p>
    The crown chakras is located at the top of your head. It is represented by a lotus flower with a thousand petals. The color of it is violet. The violet color represents purity, spirituality, and enlightenment. The element associated the with the crown chakra is consciousness.
    </p>
    <p>
      When the chakra is blocked it deals with earthly attachments such as unhealthy relationships. To balance your crown chakra you can meditate. Acts of kindness can actually help balance your crown chakra.
    </p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/dgTx58ejJ_w?si=lurjkoX2uDT5umO6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</video>

    <h3>Third Eye Chakra</h3>
      <img id="crown" src="data:image/png;base64,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""
      width="200"
      height="200"/>
        <p>
          The third eye chakra is located between the eyebrows. It is associated with pineal gland. The color for the chakra is indigo. It is associated with inturiton, wisdom, inner vision, clarity, imagination, and self-awareness.
        </p>
        <p>
        When the chakra is blocked it deals with confusion, lack of clarity, overthinking, headaches, and even sinus issues. To meditate on the third eye focus on the space between the eyebrows. Visuilize a deep indigo or violet light to focus and meditate.
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/EVsuqUKrx-I?si=EpP3bX1X_0I7MufF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3> Throat Chakra </h3>
        <img id ="throat" src= data:image/jpeg;base64,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
        width="200"
        height="200"/>

  </section>
`;
