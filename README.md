# NFT CARD WEB COMPONENT GALLERY

This project is a mini-gallery of fake NFT collections where you can show and hide the NFTs with a toggle switch. I created the cards and the toggle switch as reusable [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) for putting into practice what I've learned.

<hr/>

<h3>PREVIEW AND DEPLOYMENT</h3>

[Go to Live Site!](https://nft-card-web-component.netlify.app/)

![If the gift doesn't appear, please reload the page](https://res.cloudinary.com/docbyxdd1/image/upload/r_12/e_loop/v1671423118/projects/Github/NFT-card-web-component-gallery/nft-card-blur.webp)

<hr/>

<h3>BUILT WITH</h3>

- HTML
- CSS
- Vanilla JavaScript
- Web Component APIs
- Vite

<hr/>

<h3>WORK FLOW</h3>

I started with a mobile-first approach, completing the HTML structure and styles for both of the components. Then I used the Web Components APIs to create my custom elements (tags) and set their attributes and CSS custom properties to make them highly customizable. After that, I added the show/hide functionality and finally started to optimize the page for deployment.

<hr/>

<h3>FEATURES</h3>

- Responsive Design

<details><summary><b>Highly optimized</b></summary>

####

![If the gift doesn't appear, please reload the page](https://res.cloudinary.com/docbyxdd1/image/upload/v1671438099/r_12/e_loop/projects/Github/NFT-card-web-component-gallery/speed-insights_njjm9n.webp)

</details>



<details><summary><code>toggle-button</code></summary>

  #### 

  You could add a new toggle switch by adding the custom tag `<toggle-button>`.

  ```html
  <toggle-button></toggle-button>
  ```

  The default view is this, then you could tweak it with specific CSS custom properties and HTML attributes.

  ![Toogle switch](https://res.cloudinary.com/docbyxdd1/image/upload/r_12/v1671426351/projects/Github/NFT-card-web-component-gallery/default-toggle-button_kqd2vn.webp)
  ![Toggle switch active](https://res.cloudinary.com/docbyxdd1/image/upload/r_12/v1671427372/projects/Github/NFT-card-web-component-gallery/default-active_c9jyk1.webp)

  For having something like this, the code would be

  ![Toogle switch cutomized](https://res.cloudinary.com/docbyxdd1/image/upload/r_12/v1671427118/projects/Github/NFT-card-web-component-gallery/custom-toggle-button_e6vzaz.webp)
  ![Toggle switch cutomized active](https://res.cloudinary.com/docbyxdd1/image/upload/r_12/v1671427118/projects/Github/NFT-card-web-component-gallery/custom-toggle-button-active_baohgl.webp)

  ```html
  <toggle-button class="toggle-btn" left-word="Show" right-word="Hide"></toggle-button>
  ```

  ```css
  .toggle-btn {
  --bar-width: 70px;
  --bar-height: 32px;
  --circle-dimensions: 20px;
  --circle-left-margin-adjustment: 10px;
  --translate-x-adjustment: 32px;
  --bar-bg: #14263d;
  --bar-bg-checked: white;
  --circle-bg: white;
  --circle-bg-checked: black;
  }
  ```

  Also, it has a custom-checked attribute with its respective getter and setter methods. That way, it can actually be useful and used for interactivity.
  Here is what happens in the browser when the toggle switch is clicked "On" and "Off".

  ![If the gift doesn't appear, please reload the page](https://res.cloudinary.com/docbyxdd1/image/upload/r_12/e_loop/v1671432081/projects/Github/NFT-card-web-component-gallery/cheked-gif_uluvdc.webp)
  </details>

<details><summary><code>nft-card</code></summary>
  
  ####
  
  The nft-card component is not as customizable as the toggle switch component, but you can modify its content with the following HTML attributes
  
  ```html
    <nft-card img="" nft-title="" description="" price="" time="" user-name="" user-img=""></nft-card>
  ```
  
  For having something like this, you'll just need the following code
  
  ![Astronaut card](https://res.cloudinary.com/docbyxdd1/image/upload/r_12/v1671433446/projects/Github/NFT-card-web-component-gallery/astronaut-screen_cizcej.webp)
  
  ```html
    <nft-card
      img="/images/astronaut.webp"
      nft-title="Mars Landing"
      description="Travel and discover new worlds. Be the first to leave your mark."
      price="0.498"
      time="34"
      user-name="Daniel Triana"
      user-img="/images/foto-perfil.png"
    ></nft-card>
  ```
  
</details>
