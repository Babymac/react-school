// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  CodePane,
  S
} from "spectacle";

import preloader from "spectacle/lib/utils/preloader";

const images = {
  websitePurpleScoutComponents0: require("../assets/website-purplescout-components-0.png"),
  websitePurpleScoutComponents1: require("../assets/website-purplescout-components-1.png"),
  websitePurpleScoutComponents2: require("../assets/website-purplescout-components-2.png"),
  websitePurpleScoutComponents3: require("../assets/website-purplescout-components-3.png"),
  websitePurpleScoutComponents4: require("../assets/website-purplescout-components-4.png"),
  kublerRossGrievingCurve: require("../assets/kubler-ross-grieving-curve.png")
};

preloader(images);

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

import "prismjs/components/prism-jsx";

const theme = createTheme(
  {
    primary: "white",
    secondary: "#333333",
    tertiary: "#513675",
    quarternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={3} caps lineHeight={1} textColor="primary">
            React School
          </Heading>
          <Text margin="10px 0 0" textColor="quarternary" size={4} bold>
            Purple Scout
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            What is React?
          </Heading>
          <List>
            <ListItem>Library for building UIs</ListItem>
            <ListItem>Component based</ListItem>
            <ListItem>Declarative</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            UI Library
          </Heading>
          <List>
            <ListItem>Built &amp; backed by Facebook</ListItem>
            <ListItem>Used in production (web &amp; app)</ListItem>
            <ListItem>Big eco-system</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <BlockQuote>
            <Quote>Components are your main tool of abstraction</Quote>
            <Cite textColor="quarternary">Winston Churchill</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Components - presentation
          </Heading>
          <Image src={images.websitePurpleScoutComponents0.replace("/", "")} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Components - presentation
          </Heading>
          <Image src={images.websitePurpleScoutComponents1.replace("/", "")} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Components - presentation
          </Heading>
          <Image src={images.websitePurpleScoutComponents2.replace("/", "")} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Components - presentation
          </Heading>
          <Image src={images.websitePurpleScoutComponents3.replace("/", "")} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Components - logic
          </Heading>
          <Image src={images.websitePurpleScoutComponents4.replace("/", "")} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Components
          </Heading>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 100, paddingRight: 100 }}
            lang="jsx"
            source={`<App>
  <NavBar>
    <Logo size="small" />
    <Menu>
      <MenuItem>Varför lila</MenuItem>
      <MenuItem>...</MenuItem>
    </Menu>
  </NavBar>
  ...
  <Events count="2" />
  <Teaser image="flygande-johan" />
</App>`}
          />
          <Text style={{ marginTop: 20 }}>Your app is a component tree.</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Components
          </Heading>
          <Text style={{ marginTop: 20, marginBottom: 20 }}>
            You can configure components by passing attributes.
          </Text>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 100, paddingRight: 100 }}
            lang="jsx"
            source={`<Logo size="small" />
<Events count="2" />
<Teaser image="flygande-johan" />`}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Components
          </Heading>
          <Text style={{ marginTop: 20, marginBottom: 20 }}>
            Components are Javascript objects.
          </Text>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 100, paddingRight: 100 }}
            lang="javascript"
            source={`// <Logo size="small" />

function Logo (props) {
  return React.createElement(
    'img', {
      src: 'purple-logo.png',
      className: props.size,
    },
  );
}`}
          />
          <Text style={{ marginTop: 20 }}>
            The most simple component is a function that transforms data into
            HTML.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Components
          </Heading>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 60, paddingRight: 60 }}
            lang="jsx"
            source={`// <Logo size="small" />

function Logo(props) {
  return <img src=\"purple-logo.png\" className={props.size} />;
}
`}
          />
          <Text style={{ marginTop: 20 }}>
            This is JSX. More readable, less boilerplate.<br />Eventually, you
            will love it.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            K&uuml;bler-Ross Grieving Curve
          </Heading>
          <Image src={images.kublerRossGrievingCurve.replace("/", "")} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Components
          </Heading>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 0, paddingRight: 0 }}
            lang="jsx"
            source={`// <Logo size="small" />

const Logo = ({ size }) => <img src=\"purple-logo.png\" className={size} />;
`}
          />
          <Text style={{ marginTop: 20 }}>
            Often written in latest ES6 or newer.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Components
          </Heading>
          <Text style={{ marginTop: 20 }}>
            JSX is syntactic sugar for React.createElement
          </Text>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 50, paddingRight: 50 }}
            lang="jsx"
            source={`// jsx
{
  [1, 2].map(
    count => <h1>{Math.pow(count, 2)}</h1>
  );
}

// js
[1, 2].map(
  count => React.createElement('h1', null, Math.pow(count, 2))
);
`}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Components
          </Heading>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 0, paddingRight: 0 }}
            lang="jsx"
            source={`const Logo = ({ size }) => (
  <img src=\"purple-logo.png\" className={size} />
);

const Logo = ({ size }) => (
  <img
    src=\"purple-logo.png\"
    className={size} />
);

const Logo = ({ size }) => (
  <img
                  src=\"purple-logo.png\"
    className={size}
             />
);
`}
          />
          <Text style={{ marginTop: 20 }}>
            Use <code>()</code> for multiline. Indentation is ignored.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Components
          </Heading>
          <Text style={{ marginTop: 20 }}>
            Use ternary operator intead of if-statement.
          </Text>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 100, paddingRight: 100 }}
            lang="js"
            source={`// broken
React.createElement('h1', if (Math.random() > 0.5) {
  return 'you win!';
} else {
  return 'you lose';
});

// works
React.createElement('h1', Math.random() > 0.5
  ? 'you win!'
  : 'you lose'
);
`}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Components
          </Heading>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 100, paddingRight: 100 }}
            lang="jsx"
            source={`// <Events count="2" />

const Events = ({ count }) =>
  getEvents(2).map(
    event => <Event event={event} />
  );

const Event = ({ event }) => (
  <div>
    <h1>{event.title}</h1>
    <h2>{event.subTitle}</h2>
    <p>{event.description}</p>
  </div>
);`}
          />
          <Text style={{ marginTop: 20 }}>
            Components can be composed, hiding implementation details.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            A very small react app
          </Heading>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 100, paddingRight: 100 }}
            lang="html"
            source={`<html>
  <head>
    <script src="react.js"></script>
    <script src="react-dom.js"></script>
    <script>
      ReactDOM.render(
        React.createElement('img', {
          src: 'purple-logo.png',
          className: props.size,
        }),
        document.getElementById("root"),
      );
    </script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            A very small react app
          </Heading>
          <Text style={{ marginTop: 20 }}>
            <code>index.js</code>
          </Text>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 100, paddingRight: 100 }}
            lang="jsx"
            source={`import React from "react";
import ReactDOM from "react-dom";

const Logo = ({ size }) =>
  <img src=\"purple-logo.png\" className={size} />;

ReactDOM.render(
  <Logo size="small">,
  document.getElementById("root"),
);
            `}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <BlockQuote>
            <Quote>
              You tell the taxi driver where to go – not how to get there.
            </Quote>
            <Cite textColor="quarternary">John 14:2-3</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={4}
            textColor="tertiary"
            caps
            style={{ marginBottom: 80 }}
          >
            React is "declarative"
          </Heading>
          <Heading size={6} textColor="secondary" caps>
            Declarative
          </Heading>
          <Text>telling the computer what result you want</Text>
          <Heading
            size={6}
            textColor="secondary"
            caps
            style={{ marginTop: 40 }}
          >
            Imperative
          </Heading>
          <Text>telling the computer how to calculate it</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Update UI
          </Heading>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 100, paddingRight: 100 }}
            lang="html"
            source={`<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`}
          />
          <Text style={{ marginTop: 20 }}>How to add another item?</Text>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 100, paddingRight: 100 }}
            lang="html"
            source={"<li>Item 3</li>"}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Imperative
          </Heading>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 100, paddingRight: 100 }}
            lang="javascript"
            source="$('ul').append('<li>Item 3</li>');"
          />
          <List style={{ paddingLeft: 100 }}>
            <ListItem>find the list</ListItem>
            <ListItem>create a list item</ListItem>
            <ListItem>append it to the list</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Declarative (React)
          </Heading>
          <CodePane
            style={{
              marginTop: 40,
              fontSize: 20,
              paddingLeft: 100,
              paddingRight: 100
            }}
            lang="jsx"
            source={`<ul>
  {items.map(
    item => <li>item.name</li>
  )}
</ul>`}
          />
          <List style={{ paddingLeft: 100 }}>
            <ListItem>define how items are rendered</ListItem>
            <ListItem>
              rerender when <code>items</code> changes
            </ListItem>
            <ListItem>update DOM</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={4}
            textColor="tertiary"
            caps
            style={{ marginBottom: 40 }}
          >
            Jobs to do
          </Heading>
          <Heading size={6} textColor="secondary" caps>
            Imperative
          </Heading>
          <List style={{ paddingLeft: 100 }}>
            <ListItem>find the list</ListItem>
            <ListItem>create a list item</ListItem>
            <ListItem>append it to the list</ListItem>
          </List>
          <Heading size={6} textColor="secondary" caps>
            Declarative
          </Heading>
          <List style={{ paddingLeft: 100 }}>
            <ListItem>define how items are rendered</ListItem>
            <ListItem>
              rerender when <code>items</code> changes
            </ListItem>
            <ListItem>update DOM</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={4}
            textColor="tertiary"
            caps
            style={{ marginBottom: 40 }}
          >
            Your jobs
          </Heading>
          <Heading size={6} textColor="secondary" caps>
            Imperative
          </Heading>
          <List style={{ paddingLeft: 100 }}>
            <ListItem>find the list</ListItem>
            <ListItem>create a list item</ListItem>
            <ListItem>append it to the list</ListItem>
          </List>
          <Heading size={6} textColor="secondary" caps>
            Declarative
          </Heading>
          <List style={{ paddingLeft: 100 }}>
            <ListItem>define how items are rendered</ListItem>
            <ListItem>
              <S type="strikethrough">
                rerender when <code>items</code> changes
              </S>
            </ListItem>
            <ListItem>
              <S type="strikethrough">update DOM</S>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Imperative
          </Heading>
          <Text>
            State has to be manually maintained and synced between app and DOM.
          </Text>
          <Heading
            size={6}
            textColor="secondary"
            caps
            style={{ marginTop: 40 }}
          >
            Declarative
          </Heading>
          <Text>
            View is a (pure) function of state. React takes care of the rest.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Why do people like React?
          </Heading>
          <List>
            <ListItem>small API surface: easy to learn</ListItem>
            <ListItem>embraces Javascript</ListItem>
            <ListItem>rich ecosystem</ListItem>
            <ListItem>your code is scalable and maintainable</ListItem>
            <ListItem>you get shit done</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Next week
          </Heading>
          <List>
            <ListItem>State</ListItem>
            <ListItem>Event handling</ListItem>
            <ListItem>Interactive</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
