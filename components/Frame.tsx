import { CSSProperties, ReactNode } from "react";
import Scene, { type SceneKind } from "./Scene";

type FrameProps = {
  src?: string;
  alt?: string;
  scene?: SceneKind;
  style?: CSSProperties;
  children?: ReactNode;
};

export default function Frame({ src, alt = "", scene = "still", style, children }: FrameProps) {
  return (
    <figure className="lpl-frame" style={style}>
      {src ? <img src={src} alt={alt} /> : <Scene kind={scene} />}
      {children}
    </figure>
  );
}
