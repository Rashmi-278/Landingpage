import React from "react";
import Link from "next/link";
import {
  chakra,
  HStack,
  VStack,
  Heading,
  Flex,
  Text,
  Icon,
  useColorModeValue,
  useToken,
} from "@chakra-ui/react";

export default function Component() {
  const [red500, brand600] = useToken("colors", ["brand.300", "brand.400"]);
  const gradient = (
    <chakra.svg
      w={0}
      h={0}
      pos="absolute"
      aria-hidden="true"
      focusable="false"
    >
        <stop offset="0%" stopColor="#447799" />
        <stop offset="50%" stopColor={red500} />
        <stop offset="full" stopColor={brand600} />
    </chakra.svg>
  );
  return (
    <>
    <VStack
     w="full"
     bg={useColorModeValue("gray.200", "gray.400")}
     p={50}
     >
    <HStack
      w="full"
      bg={useColorModeValue("gray.200", "gray.400")}
      p={50}
      alignItems="center"
      justifyContent="center"
      spacing={5}
    >
      {gradient}
      <Icon
        boxSize={16}
        fill="none"
        viewBox="0 0 24 24"
        stroke="url(#gradient) #708090;"
      >
        {/* discord */}
        <path d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z"/>
        {" "}
      </Icon>
      <Icon
        boxSize={16}
        fill="none"
        viewBox="0 0 24 24"
        stroke="url(#gradient) #708090;"
      >
        {/* twitter */}
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>

      </Icon>
      <Icon
        boxSize={16}
        fill="none"
        viewBox="0 0 24 24"
        stroke="url(#gradient) #708090;"
      >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>

      </Icon>
      <Icon
        boxSize={16}
        fill="none"
        viewBox="0 0 154 182"
        stroke="url(#gradient) #303030;">

        <path fill-rule="evenodd" clip-rule="evenodd" d="M130.074 46.032c16.26 16.332 23.739 34.623 23.739 58.141 0 45.728-33.061 77.52-80.43 77.52H26.992L0 154.583V-.023h47.26c25.365 0 46.719 9.146 61.244 24.498l21.57 21.557zM25.581 24.366h-.325v5.444l23.088 22.973V47.23L25.581 24.366zm26.665 22.102L30.242 24.366H27.1l22.004 22.102h3.143zm7.697 0L37.938 24.366H31.76l22.004 22.102h6.179zM47.586 24.366h-8.13L61.46 46.468h8.13L47.585 24.366zm29.917 22.21L55.932 24.91c-2.276-.326-4.444-.435-6.829-.544l22.004 22.102h2.277c1.409 0 2.818 0 4.119.109zm6.937.763L63.41 26.217c-1.843-.436-3.794-.762-5.745-1.089L79.13 46.686c1.842.108 3.685.435 5.31.653zm6.287 1.524L70.24 28.285c-1.517-.544-3.143-1.088-4.77-1.524l20.921 21.013c1.517.327 2.927.654 4.336 1.09zm2.385.762c1.409.654 2.926 1.307 4.227 1.96L77.394 31.552a56.14 56.14 0 00-4.444-2.178l20.162 20.251zM25.256 72.816l3.902 3.92-.867.87-3.035-3.048v57.052h23.088V54.307L25.256 31.552v5.335L47.152 58.77l-.867.762L25.256 38.52v5.444l18.21 18.4-.758.871-17.452-17.638v5.553L39.89 65.957l-.758.87-13.875-14.044v5.553L36.312 69.55l-.758.87L25.256 59.97v5.661l7.48 7.513-.868.87-6.612-6.75v5.553zM95.605 48.32c-3.686-5.77-8.564-10.67-14.417-14.48l14.417 14.48zm32.301-.11l-8.78-9.036c5.854 10.997 9.648 24.606 9.648 38.76 0 1.525 0 3.049-.109 4.464l22.113 22.32v-.544c0-22.755-7.371-39.958-22.872-55.963zm-76.527 83.292c31.543-1.742 51.922-22.538 51.922-53.568 0-8.057-1.409-15.46-4.01-21.993-6.613-4.573-14.2-6.423-25.907-6.423H51.379V131.5zm72.734-25.586l22.979 23.082c2.168-7.077 3.469-14.699 3.686-22.756l-22.221-22.32c-.542 7.84-2.06 15.135-4.444 21.994zm22.546 24.171l-22.98-23.082c-2.06 5.443-4.661 10.561-7.805 15.134l23.414 23.517a70.757 70.757 0 007.371-15.569zm-16.91 27.328c3.36-3.267 6.287-6.968 8.889-10.888l-23.305-23.409c-2.71 3.811-5.745 7.404-9.214 10.561l23.63 23.736zm-33.928-15.57l23.739 23.844a79.356 79.356 0 009.43-7.512l-23.63-23.735c-2.926 2.722-6.07 5.226-9.539 7.403zm-10.406 5.771l23.739 23.844c3.252-1.524 6.395-3.266 9.43-5.117l-23.738-23.844c-2.927 1.959-6.07 3.592-9.43 5.117zm-10.189 3.81l23.63 23.736c3.144-.871 6.287-2.069 9.214-3.267L84.332 148.05c-2.927 1.307-5.962 2.504-9.106 3.375zm-9.864 2.396l23.522 23.626a103.787 103.787 0 008.78-1.96l-23.522-23.626a104.169 104.169 0 01-8.78 1.96zm-1.409.218c-2.601.544-5.311.871-8.021 1.088l23.305 23.3c2.818-.109 5.528-.436 8.238-.762l-23.522-23.626zm6.287 24.606h3.144c1.517 0 2.926 0 4.335-.109l-23.196-23.3c-2.385.109-4.77.218-7.263.218h-.108l23.088 23.191zM5.203 155.454l23.088 23.191h1.518l-22.98-23.191H5.203zm3.144 0l23.088 23.191h1.95l-23.087-23.191H8.346zm3.468 0l23.088 23.191h2.493l-23.088-23.191h-2.493zm4.01 0l23.089 23.191h3.143L18.97 155.454h-3.143zm4.662 0l23.088 23.191h3.794L24.28 155.454h-3.794zm5.311 0l23.088 23.191h4.553L30.35 155.454h-4.553zm6.179 0l23.088 23.191h5.528l-23.088-23.191h-5.528zm7.045 0l23.089 23.191h6.612l-23.197-23.191h-6.504zm234.134-23.626l26.991 27.11v22.755H195.87l-26.99-27.11V-.023h101.133l26.99 27.11v21.45h-76.852l-.109 15.569h37.614l26.99 27.11v21.885h-64.604v18.727h53.114zm20.812-103.434L270.88 5.204v18.182l23.088 22.102V28.394zm-74.684 17.094l-22.98-22.102h-1.626l22.98 22.102h1.626zm4.336 0l-23.089-22.102h-2.601l22.98 22.102h2.71zm5.419 0l-23.088-22.102h-3.794l23.088 22.102h3.794zm6.504 0l-22.98-22.102h-4.986l23.088 22.102h4.878zm8.672 0l-23.197-22.102h-6.829l22.98 22.102h7.046zm8.671 0L229.69 23.386h-6.938l23.089 22.102h7.045zm8.997 0l-23.088-22.102h-7.371l23.088 22.102h7.371zm8.672 0l-22.872-22.102h-7.262l23.088 22.102h7.046zm7.587 0l-22.98-22.102h-5.961l23.088 22.102h5.853zm6.504 0l-22.98-22.102h-4.986l23.197 22.102h4.769zm4.336 0L266.11 23.386h-2.926l23.196 22.102h2.602zm3.252 0l-22.872-22.102h-1.734l23.088 22.102h1.518zm-98.315 9.69l5.312 5.117-.868.762-4.444-4.246v7.295h23.088V46.359l-23.088-22.102v4.573L213.972 48.1l-.975.653-19.078-18.291v5.008l16.368 15.679-.976.762-15.392-14.916v5.008l12.683 12.194-.976.762-11.707-11.323v5.008l8.997 8.602-.867.762-8.13-7.84v5.01zm64.604 14.154V87.95h-.109l23.197 22.102v-17.53l-23.088-23.19zm-40.757 40.72h1.951L196.629 87.95h-1.951l23.088 22.102zM198.255 87.95l23.088 22.102h3.794l-22.98-22.102h-3.902zm5.528 0l22.98 22.102h5.962L209.528 87.95h-5.745zm7.479 0l23.089 22.102h8.129L219.5 87.95h-8.238zm41.624 22.102L230.015 87.95h-8.889l22.98 22.102h8.78zm10.406 0L240.204 87.95h-8.672l23.089 22.102h8.671zm7.479 0L247.9 87.95h-6.07l23.088 22.102h5.853zm5.42 0l-22.98-22.102h-3.793l23.088 22.102h3.685zM254.729 87.95l23.197 22.102h1.951l-22.98-22.102h-2.168zm-60.81 38.651l2.819 2.722-.868.871-1.951-1.85v3.484h23.088v-21.014l-23.088-22.102v4.79l20.053 19.381-.758.762-19.295-18.509v5.117l16.693 16.005-.867.762-15.826-15.243v5.009l13.224 12.738-.867.763-12.357-11.868v5.008l9.756 9.364-.867.762-8.889-8.493v5.009l6.287 5.988-.867.762-5.42-5.226v5.008zm80.104 10.453v18.4l23.088 23.191v-18.4l-23.088-23.191zm-89.426 18.4h-10.514l23.088 23.191h10.514l-23.088-23.191zm10.948 0h-9.43l23.088 23.191h9.539l-23.197-23.191zm1.518 0l23.196 23.191h8.455l-23.196-23.191h-8.455zm9.972 0l23.197 23.191h7.479l-23.088-23.191h-7.588zm15.717 0h-6.612l23.088 23.191h6.721l-23.197-23.191zm30.568 23.191l-23.088-23.191h-5.962l23.197 23.191h5.853zm-21.571-23.191l23.088 23.191h5.203l-23.088-23.191h-5.203zm6.721 0l23.088 23.191h4.661l-23.197-23.191h-4.552zm6.07 0l23.196 23.191h4.011l-23.197-23.191h-4.01zm5.528 0l23.197 23.191h3.468l-23.196-23.191h-3.469zm4.986 0l23.197 23.191h3.035l-23.197-23.191h-3.035zm4.553 0l23.196 23.191h2.602l-23.197-23.191h-2.601zm4.119 0l23.196 23.191h2.168l-23.088-23.191h-2.276zm3.794 0l23.088 23.191h1.951l-23.197-23.191h-1.842zm3.36 0l23.196 23.191h1.518l-23.197-23.191h-1.517zM444.854 49.408h-79.887v19.924h39.456l26.99 27.11v22.211h-66.446v63.04h-24.064l-26.99-27.11V-.023h103.951l26.99 27.11v22.32zM418.731 5.203v19.054l22.98 22.102h.108V28.394l-23.088-23.19zM362.582 46.36h1.735l-23.088-22.102h-1.518l22.871 22.102zm5.962 0l-23.196-22.102h-2.385l22.871 22.102h2.71zm5.528 0l-23.196-22.102h-3.794l22.98 22.102h4.01zm7.046 0L358.03 24.257h-5.42l22.98 22.102h5.528zm9.756 0l-23.089-22.102h-8.021l22.871 22.102h8.239zm9.322 0l-23.089-22.102h-7.696l23.088 22.102h7.697zm10.189 0l-23.089-22.102h-8.563l23.088 22.102h8.564zm9.647 0l-22.98-22.102h-8.238l23.197 22.102h8.021zm7.154 0l-23.088-22.102h-5.42l22.98 22.102h5.528zm5.528 0l-23.088-22.102h-3.902l23.088 22.102h3.902zm4.119 0l-22.98-22.102h-2.601l23.088 22.102h2.493zm-21.354-22.102l22.98 22.102h1.626l-22.98-22.102h-1.626zm-76.635 45.075h23.088V47.23l-23.088-22.21v3.7l20.595 19.925-.759.763-19.836-19.054v5.008l17.235 16.659-.867.87-16.368-15.895v5.008l13.874 13.392-.867.87-13.007-12.629v5.008l10.514 10.126-.759.762-9.755-9.363v5.117l7.154 6.86-.759.761-6.395-6.097v5.009l3.794 3.701-.759.763-3.035-2.94v5.988zm66.446 5.226v18.945l23.088 22.102V97.749l-23.088-23.19zm-65.796 18.945l22.98 22.102h2.168l-23.088-22.102h-2.06zm3.686 0l22.979 22.102h3.686l-22.98-22.102h-3.685zm5.311 0l22.871 22.102h6.829l-23.196-22.102h-6.504zm8.13 0l23.088 22.102h8.455l-22.98-22.102h-8.563zm10.189 0l22.871 22.102h9.756l-22.872-22.102h-9.755zm11.273 0l22.98 22.102h8.563l-23.088-22.102h-8.455zm9.972 0l23.197 22.102h6.504l-22.872-22.102h-6.829zm8.347 0l22.979 22.102h3.686l-22.98-22.102h-3.685zm5.203 0l23.088 22.102h2.059l-22.98-22.102h-2.167zm-62.761 61.951l23.088 23.191v-62.496l-.217.218-22.871-21.884v3.593l20.703 20.033-.758.762-19.945-19.162v5.008l17.343 16.767-.867.871-16.476-16.005v5.009l13.983 13.5-.867.871-13.116-12.738V118l10.623 10.235-.759.762-9.864-9.473v5.118l7.262 6.968-.758.762-6.504-6.206v5.117l3.902 3.702-.759.762-3.143-3.048v22.755zm-19.728 0l23.088 23.191h4.444l-22.98-23.191h-4.552zm9.972 0h-3.902l23.088 23.191h3.902l-23.088-23.191zm1.518 0l23.196 23.191h2.819l-22.98-23.191h-3.035zm4.552 0l23.089 23.191h2.059l-22.98-23.191h-2.168zM481.058-.023l26.991 27.11v154.606h-24.497l-26.991-27.11V-.023h24.497zm.868 6.968l23.088 23.191v-1.742l-23.088-23.19v1.741zm0 4.682l23.088 23.191V31.77L481.926 8.579v3.048zm0 6.424l23.088 23.19v-4.899l-23.088-23.19v4.899zm0 9.037l23.088 23.19v-7.403l-23.088-23.19v7.403zm0 12.303l23.088 23.19V51.804l-23.088-23.191v10.779zm0 16.985l23.088 23.19v-15.46l-23.088-23.19v15.46zm0 99.078l23.088 23.191V81.091L481.926 57.9v97.554zm-15.176 0h-4.986l23.088 23.191h4.878l-22.98-23.191zm28.508 23.191l-23.088-23.191h-3.902l23.088 23.191h3.902zm-21.57-23.191l23.196 23.191h2.818l-22.979-23.191h-3.035zm4.552 0l23.088 23.191h2.06l-22.98-23.191h-2.168zM716.71 36.669c10.514 10.452 15.5 22.32 15.5 37.018 0 30.486-23.196 52.697-55.39 52.697h-27.532v55.309h-24.389l-26.99-27.11V-.023h54.631c19.077 0 34.361 6.86 42.599 15.134L716.71 36.67zm-93.545 25.368l2.276 2.287-.867.87-1.409-1.415v15.134h22.004V45.38l-22.004-22.102v4.682l18.969 19.489-.759.762-18.21-18.51v5.227l15.609 15.896-.759.762-14.85-15.025v5.117l12.357 12.521-.867.762-11.49-11.65v5.118l8.997 9.145-.868.763-8.129-8.275v5.117l5.636 5.77-.867.763-4.769-4.79v5.116zm24.714-17.747l-20.812-21.013h-2.385L645.711 44.4l.976-.109h1.192zm4.878 0l-20.921-21.013h-3.252l20.921 21.013h3.252zm6.178 0l-20.92-21.013h-4.661l20.92 21.013h4.661zm7.154 0l-20.92-21.013h-5.637l20.921 21.013h5.636zm-13.116-21.013h-6.286l20.92 21.013h6.287l-20.921-21.013zm27.099 21.013l-20.27-20.36c-1.626-.326-3.468-.435-5.203-.544l20.812 20.904h4.661zm2.276-2.504l-16.042-16.114c-1.409-.544-3.035-.98-4.553-1.306l20.054 20.142c.433 0 .867 0 1.3.109-.216-.98-.433-1.85-.759-2.83zm-.975-2.504c-2.385-5.444-6.612-9.69-12.249-12.412l12.249 12.412zm33.169-.435l-9.539-9.69c2.602 5.879 4.336 13.174 4.336 20.468 0 1.307 0 2.613-.108 3.811l19.944 18.182c-.433-12.956-5.311-23.19-14.633-32.771zM651.89 78.912c18.752 0 31.868-11.65 31.868-28.199 0-.98 0-1.96-.109-2.94-1.842-.326-3.794-.435-5.636-.435h-29.809v31.574h3.686zm74.25 12.63c1.951-5.444 3.035-11.432 3.035-17.856v-.544l-20.053-18.4c-.542 6.206-2.059 11.976-4.444 17.202l21.462 19.598zm-22.004-18.618c-1.951 4.029-4.336 7.621-7.263 10.888l22.33 20.36c2.601-3.484 4.878-7.404 6.504-11.541l-21.571-19.707zm6.504 39.631a52.54 52.54 0 007.913-7.621l-22.438-20.36c-2.493 2.722-5.203 5.008-8.238 7.186l22.763 20.795zm-31.977-15.678L701.751 118c2.927-1.415 5.528-2.939 8.021-4.79l-22.871-20.796c-2.601 1.633-5.311 3.157-8.238 4.464zm-9.105 3.157l23.305 21.232a62.17 62.17 0 007.913-2.831l-23.197-21.123c-2.601 1.09-5.311 1.96-8.021 2.722zm-8.78 1.634l23.413 21.231a76.19 76.19 0 007.479-1.307l-23.305-21.34c-2.493.653-4.986 1.089-7.587 1.416zm14.85 21.666h1.192c1.951 0 3.903-.109 5.745-.218l-23.305-21.231c-2.168.218-4.444.327-6.72.436l23.088 21.013zm-30.676-21.013l23.088 21.013h5.854l-22.98-21.013h-5.962zm1.301 76.323v-55.31h.108l-23.088-21.013h-.108v5.553l20.053 18.291-.867.762-19.186-17.529v5.77l16.259 14.808-.867.762-15.392-14.045v5.661l12.465 11.432-.759.763-11.706-10.67v5.77l8.671 7.948-.758.762-7.913-7.186v5.553l4.986 4.573-.759.871-4.227-3.811v17.094l23.088 23.191zm-21.354-76.323l22.98 21.013h2.385l-23.089-21.013h-2.276zm3.794 0l23.088 21.013h2.927l-23.088-21.013h-2.927zm4.661 0l22.98 21.013h3.685l-22.98-21.013h-3.685zm5.094 0l23.197 21.013h4.769l-22.979-21.013h-4.987zm-35.336 53.132l23.088 23.191h4.769l-22.98-23.191h-4.877zm10.297 0h-3.902l23.088 23.191h3.902l-23.088-23.191zm1.518 0l23.196 23.191h2.819l-22.98-23.191h-3.035zm4.552 0l23.089 23.191h2.059l-22.98-23.191h-2.168zM875.617-.132l25.907 26.022v86.013c0 43.551-25.798 72.077-64.929 72.077-20.703 0-35.554-5.88-48.995-19.38l-22.221-22.102c-12.248-12.086-18.86-30.268-18.86-53.568V-.132h24.389l26.99 27.11v87.32c0 6.751.759 13.283 2.493 19.163a49.055 49.055 0 0011.598 1.415c24.498 0 39.239-17.42 39.239-46.817V-.131h24.389zm-80.754 28.417l-23.088-23.19v1.742l23.088 23.19v-1.742zm81.621-21.34l22.005 22.103v-1.851L876.484 5.203v1.742zM794.863 34.71v-3.048L771.775 8.47v3.048l23.088 23.191zm81.621-23.082l22.005 22.102v-3.048L876.484 8.579v3.048zm-81.621 29.506v-4.9l-23.088-23.19v4.9l23.088 23.19zm81.621-23.082l22.005 22.102v-4.9l-22.005-22.102v4.9zM794.863 50.17v-7.404l-23.088-23.19v7.403l23.088 23.19zm81.621-23.082l22.005 22.102v-7.404l-22.005-22.102v7.404zm-81.621 35.385V51.694l-23.088-23.19v10.778l23.088 23.19zm81.621-23.082l22.005 22.102V50.714l-22.005-22.102v10.779zm-81.621 40.067v-15.46l-23.088-23.192v15.46l23.088 23.192zm103.626-16.44l-22.005-22.103v15.46l22.005 22.103v-15.46zM771.775 57.79V88.06c0 22.646 9.322 38.434 25.256 44.313-1.409-5.662-2.168-11.759-2.168-18.074V80.982l-23.088-23.19zm123.028 80.46c2.385-7.948 3.686-16.767 3.686-26.348v-31.9L876.484 57.9v31.03c0 10.126-1.192 19.271-3.577 27.328l21.896 21.993zm-22.329-20.904c-1.626 5.335-3.794 10.234-6.504 14.481l21.788 21.884c2.709-4.355 4.986-9.146 6.612-14.372l-21.896-21.993zm6.937 47.035c2.927-2.94 5.528-6.097 7.805-9.69l-21.788-21.885c-2.276 3.593-4.878 6.751-7.804 9.691l21.787 21.884zm-30.893-14.916l22.005 22.102c2.927-1.851 5.636-4.029 8.129-6.424l-21.895-21.993c-2.494 2.395-5.203 4.464-8.239 6.315zm-8.996 4.573l22.112 22.21c2.71-1.197 5.42-2.504 7.913-4.137l-22.004-22.102c-2.493 1.524-5.203 2.831-8.021 4.029zm-61.569-2.94l11.815 11.323a82.09 82.09 0 006.829 5.879l-15.826-15.896-2.818-1.306zm8.563 3.484c-1.084-.436-2.167-.762-3.251-1.198l18.21 18.292c1.626.98 3.143 1.959 4.769 2.722l-19.728-19.816zm44.117 2.177l22.221 22.32c2.602-.653 5.095-1.415 7.588-2.395l-22.113-22.211a89.559 89.559 0 01-7.696 2.286zm-41.949-1.524l20.487 20.578c1.409.544 2.818 1.198 4.336 1.633l-21.029-21.122a49.588 49.588 0 01-3.794-1.089zm5.962 1.633l21.246 21.34c1.517.436 3.035.871 4.661 1.198l-21.571-21.667c-1.518-.326-2.927-.544-4.336-.871zm27.532 1.307l22.222 22.32c2.493-.218 4.877-.654 7.154-1.198l-22.221-22.32c-2.277.545-4.661.98-7.155 1.198zm-21.462-.218l21.679 21.776c1.735.326 3.469.544 5.203.762l-21.787-21.885a40.738 40.738 0 01-5.095-.653zm13.875.871l22.004 22.102c2.168 0 4.336-.109 6.395-.326l-22.112-22.211c-2.06.217-4.228.326-6.287.435zm-7.154-.109l21.787 21.885c1.951.217 3.794.326 5.853.326l-22.004-22.102h-1.517c-1.409 0-2.71 0-4.119-.109zm214.403-27.437l26.99 27.111v23.299h-98.745l-26.99-27.11V-.023h24.389l26.99 27.11v104.196h47.366zM971.439 28.394l-23.088-23.19v1.633l23.088 23.19v-1.633zm0 6.315v-3.048L948.351 8.47v3.048l23.088 23.191zm0 6.424v-4.9l-23.088-23.19v4.9l23.088 23.19zm0 9.037v-7.404l-23.088-23.19v7.403l23.088 23.19zm0 12.303V51.694l-23.088-23.19v10.778l23.088 23.19zm0 16.985v-15.46l-23.088-23.192v15.46l23.088 23.192zm-23.088 51.825h23.088V80.982l-23.088-23.19v73.491zm97.449 47.362V159.7l-23.09-23.191v18.945l23.09 23.191zm-117.502-23.191l23.088 23.191h10.081l-23.197-23.191h-9.972zm11.49 0l23.196 23.191h9.105l-23.196-23.191h-9.105zm10.622 0l23.197 23.191h8.129l-23.196-23.191h-8.13zm9.647 0l23.197 23.191h7.154l-23.088-23.191h-7.263zm8.78 0l23.197 23.191h6.395l-23.088-23.191h-6.504zm8.022 0l23.088 23.191h5.743l-23.195-23.191h-5.636zm7.154 0l23.197 23.191h5.09l-23.193-23.191h-5.094zm6.612 0l23.195 23.191h4.45l-23.201-23.191h-4.444zm5.962 0l23.193 23.191h3.91l-23.09-23.191h-4.013zm5.523 0l23.09 23.191h3.47l-23.19-23.191h-3.37zm4.88 0l23.2 23.191h2.93l-23.09-23.191h-3.04zm4.56 0l23.08 23.191h2.6l-23.19-23.191h-2.49zm4.11 0l23.09 23.191h2.17l-23.09-23.191h-2.17zm3.69 0l23.09 23.191h1.84l-23.09-23.191h-1.84zm145.9-48.124c8.35 8.384 11.92 17.638 11.92 30.377 0 27.328-21.46 46.273-52.57 46.273-22.54.435-39.35-6.206-49.86-14.263l-26.67-26.784v-25.695l2.61-1.089c11.7 10.997 27.96 17.203 44.87 17.203 14.09 0 25.47-5.117 29.92-12.848-16.91-8.274-36.75-12.847-47.91-27.11l-16.37-20.904c-7.8-10.017-11.6-17.312-11.6-29.288 0-26.784 21.25-45.184 52.25-45.184 15.72-.327 31.65 3.92 43.14 11.432l26.77 26.892v24.389l-2.38 1.197c-12.25-9.036-26.23-14.154-39.24-14.154-14.96 0-26.12 5.989-29.05 15.352 15.18 5.444 31.43 10.888 41.73 21.449l22.44 22.755zm-19.62-92.872v20.033h-.11l23.2 23.3V37.65l-23.09-23.191zm-39.13 7.186c-.87-.109-1.73-.109-2.49-.109-1.63 0-3.26.109-4.88.218l23.41 23.517c2.17-.326 4.55-.544 6.94-.544l-22.98-23.082zm30.68 23.517l-22.44-22.537a66.921 66.921 0 00-6.72-.98L1131 44.726c2.06 0 4.12.218 6.18.435zm-15.94.327l-23.52-23.626c-2.82.435-5.42.98-7.91 1.742l23.74 23.844c2.38-.871 4.98-1.525 7.69-1.96zm23.2 1.089L1122.76 24.8c-1.95-.653-4.01-1.306-6.07-1.742l22.33 22.429c1.73.218 3.58.653 5.42 1.089zm-31.98 1.306l-23.74-23.844c-3.14 1.089-5.74 2.613-7.91 4.464l23.96 24.062c2.16-1.85 4.76-3.375 7.69-4.682zm38.92.871l-20.49-20.577a91.221 91.221 0 00-5.75-2.505l21.36 21.45c1.62.435 3.25.98 4.88 1.632zm-53.23 13.283c1.09-3.375 3.04-6.315 5.75-8.819l-23.96-24.062c-3.03 2.831-4.98 6.315-5.53 10.126l22.01 22.102 1.73.653zm59.73-10.56l-18.21-18.292c-1.84-1.198-3.69-2.395-5.64-3.375l19.84 19.924c1.3.545 2.71 1.089 4.01 1.742zm-14.31-15.897l17.45 17.53c1.09.544 2.28 1.197 3.47 1.96l-19.94-20.034-.98.544zm-69.26 5.988c0 9.146 8.34 14.263 19.62 18.836l-19.62-19.707v.871zm8.02 52.588c3.9 4.246 9.32 7.621 15.5 10.67l-24.93-25.042c-1.3-.762-2.6-1.524-3.8-2.286 3.91 5.444 8.24 11.214 13.23 16.658zm1.41-9.146c-2.6-1.088-5.21-2.286-7.59-3.484l24.6 24.715c2.39 1.089 4.88 2.178 7.48 3.267l-24.49-24.498zm2.49.98l24.61 24.607c1.95.871 3.9 1.633 5.85 2.504l-24.82-24.933c-1.85-.653-3.69-1.416-5.64-2.178zm8.02 3.049l25.15 25.259c1.62.654 3.25 1.416 4.88 2.178l-25.69-25.913c-1.41-.435-2.93-.98-4.34-1.524zm32.63 28.417c.11-.545.32-1.089.43-1.633l-22.87-23.082a41.402 41.402 0 00-3.36-1.198l25.8 25.913zm-19.84-23.735l20.49 20.577c.11-.435.11-.98.11-1.415v-.109l-17.78-17.856-2.82-1.197zm20.49 17.42l-.33-1.633-12.14-12.194c-.76-.436-1.62-.763-2.49-1.198l14.96 15.025zm35.55-1.633l-12.25-12.303c1.52 4.137 2.39 8.819 2.39 14.263 0 2.721-.22 5.335-.65 7.948l21.46 21.557c.11-1.089.11-2.177.11-3.266 0-12.085-3.25-20.36-11.06-28.199zm-36.74-2.504c-1.52-2.94-4.23-5.444-7.7-7.622l7.7 7.622zm47.58 35.385l-21.57-21.667c-1.08 5.008-2.93 9.69-5.53 13.828l22.77 22.864a43.16 43.16 0 004.33-15.025zm-12.03 25.15c2.82-2.722 5.2-5.77 7.05-9.145l-22.77-22.865c-2.06 3.267-4.55 6.098-7.48 8.711l23.2 23.299zm-32.19-17.202l23.52 23.735c2.92-1.742 5.53-3.593 7.91-5.771l-23.3-23.408c-2.5 2.069-5.21 3.919-8.13 5.444zm-70.35-.436l17.34 17.421c1.63 1.197 3.25 2.395 5.1 3.484l-19.62-19.598-2.82-1.307zm61.24 4.355l23.63 23.735c2.82-.979 5.53-2.068 8.02-3.484l-23.52-23.626c-2.49 1.307-5.2 2.504-8.13 3.375zm-55.71-1.96l20.37 20.469c1.2.545 2.39 1.198 3.69 1.742l-21.03-21.122-3.03-1.089zm5.31 1.743l21.35 21.557c1.3.436 2.71.98 4.12 1.416l-21.9-21.994-3.57-.979zm41.62 2.395l23.52 23.626c2.71-.435 5.31-.98 7.7-1.742l-23.52-23.626c-2.5.653-4.99 1.306-7.7 1.742zm-35.99-.871l22.01 22.102c1.52.435 3.03.871 4.66 1.198l-22.44-22.538c-1.41-.218-2.82-.544-4.23-.762zm6.07 1.089l22.44 22.537c1.74.327 3.36.653 5.1.871l-22.66-22.864c-1.73-.109-3.25-.327-4.88-.544zm52.03 23.626l-23.41-23.626c-2.28.435-4.66.653-7.05.871l23.31 23.408c2.49-.109 4.88-.326 7.15-.653zm-45.41-22.864l22.87 22.864c1.95.218 3.79.435 5.74.544l-23.09-23.191c-1.84 0-3.68-.108-5.52-.217zm30.13 23.408c1.95.109 4.01.109 5.96.109h.54l-23.19-23.408c-1.2.108-2.28.108-3.47.108h-2.93l23.09 23.191zm180.37-48.994l26.99 27.11v22.755h-104.28l-26.99-27.11V-.023h101.14l26.99 27.11v21.45H1246l-.1 15.569h37.61l26.99 27.11v21.885h-64.6v18.727h53.11zm20.81-103.434l-23.09-23.19v18.182l23.09 22.102V28.394zm-74.68 17.094l-22.98-22.102h-1.63l22.98 22.102h1.63zm4.33 0l-23.09-22.102h-2.6l22.98 22.102h2.71zm5.42 0l-23.09-22.102h-3.79l23.09 22.102h3.79zm6.51 0l-22.98-22.102h-4.99l23.09 22.102h4.88zm8.67 0l-23.2-22.102h-6.83l22.98 22.102h7.05zm8.67 0l-23.2-22.102h-6.93l23.08 22.102h7.05zm9 0l-23.09-22.102h-7.37l23.09 22.102h7.37zm8.67 0l-22.87-22.102h-7.27l23.09 22.102h7.05zm7.59 0l-22.98-22.102h-5.97l23.09 22.102h5.86zm6.5 0l-22.98-22.102h-4.99l23.2 22.102h4.77zm4.34 0l-22.88-22.102h-2.92l23.19 22.102h2.61zm3.25 0l-22.87-22.102h-1.74l23.09 22.102h1.52zm-98.32 9.69l5.31 5.117-.86.762-4.45-4.246v7.295h23.09V46.359l-23.09-22.102v4.573l20.06 19.271-.98.653-19.08-18.291v5.008l16.37 15.679-.98.762-15.39-14.916v5.008l12.68 12.194-.97.762-11.71-11.323v5.008l9 8.602-.87.762-8.13-7.84v5.01zm64.61 14.154V87.95h-.11l23.19 22.102v-17.53l-23.08-23.19zm-40.76 40.72h1.95l-23.09-22.102h-1.95l23.09 22.102zm-19.51-22.102l23.09 22.102h3.79l-22.98-22.102h-3.9zm5.53 0l22.98 22.102h5.96l-23.2-22.102h-5.74zm7.48 0l23.08 22.102h8.13l-22.98-22.102h-8.23zm41.62 22.102l-22.87-22.102h-8.89l22.98 22.102h8.78zm10.41 0l-23.09-22.102h-8.67l23.08 22.102h8.68zm7.47 0l-22.87-22.102h-6.07l23.09 22.102h5.85zm5.42 0l-22.98-22.102h-3.79l23.09 22.102h3.68zm-21.46-22.102l23.2 22.102h1.95l-22.98-22.102h-2.17zm-60.81 38.651l2.82 2.722-.87.871-1.95-1.85v3.484h23.09v-21.014l-23.09-22.102v4.79l20.06 19.381-.76.762-19.3-18.509v5.117l16.7 16.005-.87.762-15.83-15.243v5.009l13.23 12.738-.87.763-12.36-11.868v5.008l9.76 9.364-.87.762-8.89-8.493v5.009l6.29 5.988-.87.762-5.42-5.226v5.008zm80.11 10.453v18.4l23.08 23.191v-18.4l-23.08-23.191zm-89.43 18.4h-10.51l23.08 23.191h10.52l-23.09-23.191zm10.95 0h-9.43l23.09 23.191h9.54l-23.2-23.191zm1.52 0l23.19 23.191h8.46l-23.2-23.191h-8.45zm9.97 0l23.19 23.191h7.48l-23.08-23.191h-7.59zm15.72 0h-6.62l23.09 23.191h6.72l-23.19-23.191zm30.56 23.191l-23.09-23.191h-5.96l23.2 23.191h5.85zm-21.57-23.191l23.09 23.191h5.2l-23.08-23.191h-5.21zm6.72 0l23.09 23.191h4.66l-23.19-23.191h-4.56zm6.07 0l23.2 23.191h4.01l-23.2-23.191h-4.01zm5.53 0l23.2 23.191h3.47l-23.2-23.191h-3.47zm4.99 0l23.19 23.191h3.04l-23.2-23.191h-3.03zm4.55 0l23.2 23.191h2.6l-23.2-23.191h-2.6zm4.12 0l23.2 23.191h2.16l-23.08-23.191h-2.28zm3.79 0l23.09 23.191h1.95l-23.19-23.191h-1.85zm3.36 0l23.2 23.191h1.52l-23.2-23.191h-1.52z" fill="#F4F1F3">
        </path>
      </Icon>
    </HStack>
    <VStack>
      <HStack>
      <a target="_blank" href="https://docs.ideamarket.io/" rel="noopener noreferrer">
      <Text px={1} fontWeight="semibold" fontSize="sm">Legal and Privacy</Text>
      </a>
      <a target="_blank"  href="https://docs.ideamarket.io/" rel="noopener noreferrer">
      <Text px={1} fontWeight="semibold" fontSize="sm">Need Help?</Text>
      </a>
      <a target="_blank" href="https://ideamarket.io/TOS.pdf" rel="noopener noreferrer">
      <Text px={1}  fontWeight="semibold" fontSize="sm">Contact Us</Text>
      </a>
      </HStack>
    </VStack>
    <Text px={1} fontSize="sm">Copyright 2021 ideamarket.io</Text>

    </VStack>
    </>

  );
}



