import styles from "./page.module.css";


export default function About({children}) {
    return (
        <section id="about" className={styles.intro}>
        <div className="d-flex flex-row justify-content-end p-4">
                <div className={styles.namediv}>
                    <p  className="text-light me-3 text-center" style={
      {fontFamily: "Major Mono Display",
      fontWeight: 400, fontSize: 60}}>
                        About Me</p>
                    <p className="lead" style={{
                            color: "#6a6a6a"
                        }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint error, sit ea animi asperiores eveniet reprehenderit eius atque neque tempore veniam quo facilis dolores vitae doloribus modi possimus. Perspiciatis, fugiat?</p>
                </div>
            </div>
   
        </section>
    );
}