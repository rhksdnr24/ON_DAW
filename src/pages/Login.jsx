import React from "react";
import {
  Authenticator,
  Button,
  Heading,
  Flex,
  View,
} from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import outputs from "../../amplify_outputs.json";

// Amplify 설정
Amplify.configure(outputs);

export default function Login() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <Flex
          className="login-page"
          justifyContent="center"
          alignItems="center"
          direction="column"
          height="100vh"
          backgroundColor="#121212"
          color="#fff"
        >
          {/* Welcome Heading */}
          <Heading level={1} style={{ marginBottom: "1rem" }}>
            Welcome to ON_DAW
          </Heading>

          {/* User Information */}
          <View>
            <Heading level={3}>Hello, {user.username}</Heading>
          </View>

          {/* Sign Out Button */}
          <Button
            variation="primary"
            onClick={signOut}
            style={{ marginTop: "2rem" }}
          >
            Sign Out
          </Button>
        </Flex>
      )}
    </Authenticator>
  );
}
