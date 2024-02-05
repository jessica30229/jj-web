import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
// import { Button, Icon } from "semantic-ui-react";
import "react-horizontal-scrolling-menu/dist/styles.css";

const getItems = () =>
  Array(7)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

function Arrow({ children, disabled, onClick }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        right: "10%",
        width: "500vx",
        opacity: disabled ? "0" : "1",
        userSelect: "none",
        backgroundColor: "white",
        border: "0px solid",
        // borderImage:"linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)",
        // borderImageSlice: 1,
      }}
    >
      {children}
    </button>
  );
}

function Scrollcard() {
  const [items] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {items.map(({ id }) => (
        <Card
          itemId={id} // NOTE: itemId is required for track items
          title={id}
          key={id}
          onClick={handleClick(id)}
          selected={isItemSelected(id)}
        />
      ))}
    </ScrollMenu>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}></Arrow>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}></Arrow>
  );
}

function Card({ onClick, selected, title, itemId }) {
  const visibility = React.useContext(VisibilityContext);
  const visible = visibility.isItemVisible(itemId);

  return (
    <div
      onClick={() => onClick(visibility)}
      style={{
        width: "20px",
        height: "20px",
        border: "1px solid",
      }}
      tabIndex={0}
    >
      <div className="card">
        {/* <div>{title}</div>
        <div style={{ backgroundColor: visible ? "transparent" : "gray" }}>
          visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}
        </div>
        <div>selected: {JSON.stringify(!!selected)}</div> */}
      </div>
      <div
        style={{
          background: "rgba(255, 0.85, 0.85, 0.10)",
          borderColor: selected ? "#FF0101" : "gray",
          height: "150px",
          margin: "20%",
        }}
      />
    </div>
  );
}

export default Scrollcard;
