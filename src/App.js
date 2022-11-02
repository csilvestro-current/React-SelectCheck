import * as React from 'react';

function App() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuOne = () => {
    // do something
    setOpen(false);
    console.log('clicked one');
  };

  const handleMenuTwo = () => {
    // do something
    setOpen(false);
    console.log('clicked two');
  };


return (
  <div>
    <p>Drop Down using Hooks</p>
    <Dropdown
      open={open}
      trigger={<button>Dropdown</button>}
      menu={[
        <button onClick={handleMenuOne}>Menu 1</button>,
        <button onClick={handleMenuTwo}>Menu 2</button>,
      ]}
    />
    </div>
  );
};

const Dropdown = ({ trigger, menu }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown">
      {React.cloneElement(trigger, {
        onClick: handleOpen,
      })}
      {open ? (
        <ul className="menu">
          {menu.map((menuItem, index) => (
            <li key={index} className="menu-item">
              {React.cloneElement(menuItem, {
                onClick: () => {
                  menuItem.props.onClick();
                  setOpen(false);
                },
              })}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default App;

const styles = {
  dropdown: {
    position: 'relative'
  },
  menu: {
    position: 'absolute',
    list-style-type: 'none',
    margin: '5px 0',
    padding: 0,
    border: '1px solid grey',
    width: '150px'
  }
}


.menu > li {
  margin: 0;

  background-color: white;
}

.menu > li:hover {
  background-color: lightgray;
}

.menu > li > button {
  width: 100%;
  height: 100%;
  text-align: left;

  background: none;
  color: inherit;
  border: none;
  padding: 5px;
  margin: 0;
  font: inherit;
  cursor: pointer;
}