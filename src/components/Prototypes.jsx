import useActions from "../Hooks/useActions";
import uesPrototypes from "../Hooks/usePrototypes";

export default function Prototypes() {
  const prototypes = uesPrototypes();
  const { addToOrder } = useActions();

  return (
    <main>
      <div className="prototypes">
        {prototypes.map((prototype) => {
          const { id, thumbnail, title, price, pieUrl, desc } = prototype;
          const click = () => {
            addToOrder(id);
          };

          return (
            <div className="prototype" key={id}>
              <a href={pieUrl} target="_BLANK" rel="noreferrer">
                <div
                  style={{
                    padding: "25px",
                  }}
                >
                  <video
                    autoPlay
                    loop
                    playsInline
                    className="prototype__artwork prototype__edit"
                    src={thumbnail}
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </div>
              </a>

              <div className="prototype__body">
                <div className="prototype__title">
                  <div
                    className="btn btn--primary float--right"
                    onClick={click}
                  >
                    <i className="icon icon--plus" />
                  </div>
                  {title}
                  <p className="prototype__price">$ {price}</p>
                  <p className="prototype__desc">{desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
