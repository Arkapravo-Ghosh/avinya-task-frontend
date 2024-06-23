import { Flex } from "@chakra-ui/react";
import useRequireAuth from "../hooks/useRequireAuth";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useState } from "react";
import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
// import { RpcError } from "@protobuf-ts/runtime-rpc";
import { EdfServiceClient } from "../protos/edf_service.client";
import { EdfData } from "../protos/edf_service";

const Home = () => {
  useRequireAuth();

  const [data, setData] = useState<unknown[]>([]);

  const getData = async () => {
    const transport = new GrpcWebFetchTransport({
      baseUrl: "/",
    });
    const edfService = new EdfServiceClient(transport);

    // Stream data from the server
    const stream = edfService.streamEdfData({});

    stream.responses.onMessage((response) => {
      setData([...data, response as EdfData]);
      console.log(data);
    });
  };
  getData();


  return (
    <Flex
      flexDirection={"column"}
      color={"text"}
      width={"100%"}
      height={"100vh"}
      layerStyle={"primary_background"}
    >
      <HighchartsReact
        highcharts={Highcharts}
        options={{
          title: {
            text: "EEG Data",
          },
          series: data,
        }}
      />
    </Flex>
  )
};

export default Home;