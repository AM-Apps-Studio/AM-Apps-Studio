import Image from "next/image";
import android from "../../assets/img/android.png";
export default function JuggleMaster() {
  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          flex: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <iframe
          style={{
            border: 0,
          }}
          src="/jugglemaster/index.html"
          height={"100%"}
        />
      </div>
      <div
        style={{
          display: "flex",
          flex: 2,
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          padding: "10%",
        }}
      >
        <span
          style={{
            fontFamily: "monospace",
          }}
        >
          This is a beta, so it may contain bugs. To continue juggling, download
          the app!
        </span>
        <div>
          <a
            href="https://play.google.com/store/apps/details?id=com.am.apps.JuggleMaster"
            target="_blank"
          >
            <Image src={android} alt="android" width={50} />
          </a>
        </div>
      </div>
    </div>
  );
}
