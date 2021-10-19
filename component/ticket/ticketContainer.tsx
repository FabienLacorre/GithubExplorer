import Ticket from "./index";
import { useRouter } from "next/router";
import { StyledTicketContainer } from "./style";

const TicketContainer: React.FunctionComponent<{
  data: any;
  visibility: boolean;
}> = ({ data, visibility }) => {
  const router = useRouter();

  const handlerSelectTicket = (e: any) => {
    router.push({
      pathname: "/details",
      query: {
        owner: e?.full_name.split("/")[0],
        repo: e?.full_name.split("/")[1],
        description: e?.description,
      },
    });
  };

  if (visibility != true) {
    return null;
  }
  return (
    <StyledTicketContainer>
      {data &&
        data?.map((e: any, index: number) => {
          return (
            <div key={index + "tickets"}>
              <Ticket
                onSelect={() => {
                  handlerSelectTicket(e);
                }}
                title={e?.full_name}
                subTitle={e?.description}
                logoUrl={e?.owner.avatar_url}
              />
              {/* SEPARATOR IF NOT THE LAST ELEMENT */}
              {index != data.length - 1 && <div style={{ marginBottom: 8 }} />}
            </div>
          );
        })}
    </StyledTicketContainer>
  );
};

export default TicketContainer;
