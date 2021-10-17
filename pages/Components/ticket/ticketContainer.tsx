import styles from "../../../styles/Home.module.css";
import Ticket from "./index";
import { useRouter } from "next/router";

const TicketContainer: React.FunctionComponent<{ data: any }> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      {data && data.length > 0 && (
        <div className={styles.ticketContainer}>
          {data.map((e: any, index: number) => {
            return (
              <div key={index + "tickets"}>
                <Ticket
                  handlerRedirection={() => {
                    router.push({
                      pathname: "/details",
                      query: { repo: "test" },
                    });
                  }}
                  title={e?.full_name}
                  subTitle={e?.description}
                  logoUrl={e?.owner.avatar_url}
                />
                {/* SEPARATOR IF NOT THE LAST ELEMENT */}
                {index != data.length - 1 && (
                  <div style={{ marginBottom: 8 }} />
                )}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default TicketContainer;
