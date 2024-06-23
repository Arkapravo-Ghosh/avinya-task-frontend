import { Circle, Flex, Image, Link, Text } from "@chakra-ui/react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.avif";

const apiURL = import.meta.env.VITE_API_URL;

const Login = () => {
  const navigate = useNavigate();
  const onSuccess = (token: CredentialResponse) => {
    axios.post(`${apiURL}/user/login`, { token: token.credential }).then((response) => {
      if (response.status === 200) {
        Cookies.set("authtoken", response.data.authtoken);
        Cookies.set("refreshtoken", response.data.refreshtoken);
        navigate("/");
      } else {
        onError(response.data.error);
      };
    }).catch((err: unknown) => onError(err));
  };

  const onError = (err: unknown) => {
    console.error("Login error:", err);
    alert("Login error");
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      w="100%"
      h="100vh"
      backgroundSize="cover"
    >
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        borderRadius={8}
        flexDirection={"column"}
        paddingInline={6}
        paddingBlock={8}
        border={"primary"}
        shadow={"primary"}
        width={350}
        layerStyle={"secondary_background"}
      >
        <Circle size={20} mb={4} border={"primary"} padding={1} layerStyle={"tertiary_background"} overflow={"hidden"} background={"white"}>
          <Image src={logo} alt="Avinya Task" />
        </Circle>
        <Text fontSize="2xl" fontWeight="bold" mb={4} color={"text"}>
          Welcome to <Text as="span" color={"primary"}>Avinya Task</Text>
        </Text>
        <Text fontSize="lg" mb={4} color={"text"}>
          Sign In to Get Started
        </Text>
        <GoogleLogin onSuccess={onSuccess} onError={() => onError} auto_select={true} theme="outline" />
        <Text fontSize="sm" mt={4} color={"text"} textAlign={"center"}>
          By continuing, you agree to our <Link color="primary">Terms of Service</Link> and <Link color="primary">Privacy Policy</Link>
        </Text>
      </Flex>
    </Flex>
  );
};

export default Login;