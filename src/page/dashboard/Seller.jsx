import styles from "../seller/Seller.module.scss";
import sellerIcon from "../../../Asset/store.svg";
import buttonShipping from "../../../Asset/seller.svg";
import buttonCompleted from "../../../Asset/completed.svg";
import MenuImage from "../../../Asset/Frame 3.svg";
import { Link } from "react-router-dom";

export default function Seller() {
  return (
    <div className={styles.sellerContainer}>
      <div className={styles.seller}>
        <div className={styles.menuBarSeller}>
          <div className={styles.menuBar}>
            <Link to="">My Recipe</Link>
            <Link to="">My Order</Link>
          </div>
          <div className={styles.sellerBar}>
            <div className={styles.iconStore}>
              <img src={sellerIcon} alt="" />
            </div>
            <Link to="">Seller Dashboard</Link>
          </div>
        </div>
        <div className={styles.menuSeller}>
          <h2>Seller Dashboard</h2>
          <div className={styles.menuButton}>
            <div className={styles.listButton}>
              <button className={styles.buttonAll}>All</button>
              <div className={styles.list}>
                <button className={styles.buttonshipping}>
                  <div className={styles.iconbutton}>
                    <img src={buttonShipping} alt="" />
                    <span>Prepare Shipping</span>
                  </div>
                </button>
                <button className={styles.buttoncompleted}>
                  <div className={styles.iconbutton}>
                    <img src={buttonCompleted} alt="" />
                    <span>Completed</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.menuCollections}>
            <div className={styles.menuContainer}>
              <div className={styles.menuImage}>
                <img src={MenuImage} alt="" />
              </div>
              <div className={styles.menuDescriptions}>
                <div className={styles.menuCollectionButton}>
                  <div className={styles.title1}>
                    <h4>Order 1234566</h4>
                  </div>
                  <div className={styles.button}>
                    <button>Verify Payment</button>
                  </div>
                </div>
                <div className={styles.billDescription}>
                  <h4>Rp.135.000</h4>
                  <p>1 package</p>
                </div>
                <div className={styles.descriptionDates}>
                  <Link to="/details">see ingredient details</Link>
                  <p>26 Jul 2021</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.menuCollections}>
            <div className={styles.menuContainer}>
              <div className={styles.menuImage}>
                <img src={MenuImage} alt="" />
              </div>
              <div className={styles.menuDescriptions}>
                <div className={styles.menuCollectionButton}>
                  <div className={styles.title2}>
                    <h4>Baked Oatmeal with Mixed Berries</h4>
                  </div>
                  <div className={styles.button1}>
                    <p>
                      Completed
                      <img src={buttonCompleted} alt="" />
                    </p>
                  </div>
                </div>
                <div className={styles.billDescription}>
                  <h4>Rp.135.000</h4>
                  <p>1 package</p>
                </div>
                <div className={styles.descriptionDates}>
                  <Link to="/details">see ingredient details</Link>
                  <p>26 Jul 2021</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.menuCollections}>
            <div className={styles.menuContainer}>
              <div className={styles.menuImage}>
                <img src={MenuImage} alt="" />
              </div>
              <div className={styles.menuDescriptions}>
                <div className={styles.menuCollectionButton}>
                  <div className={styles.title3}>
                    <h4>Baked Oatmeal with Mixed Berries</h4>
                  </div>
                  <div className={styles.button2}>
                    <p>
                      <img src={buttonShipping} alt="" />
                      Prepare Shipping
                    </p>
                  </div>
                  <div className={styles.button}>
                    <button>Verify Payment</button>
                  </div>
                </div>
                <div className={styles.billDescription}>
                  <h4>Rp.135.000</h4>
                  <p>1 package</p>
                </div>
                <div className={styles.descriptionDates}>
                  <Link to="/details">see ingredient details</Link>
                  <p>26 Jul 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
