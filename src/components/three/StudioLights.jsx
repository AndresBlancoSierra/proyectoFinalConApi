import {Environment, Lightformer} from "@react-three/drei";

const StudioLights = () => {
    return (
        <group name="lights">
            <Environment resolution={512}>
                <group>
                    <Lightformer
                        form="rect"
                        intensity={80}
                        position={[-8, 6, -4]}
                        scale={80}
                        rotation-y={Math.PI / 4}
                        color="#ffffff"
                    />
                    <Lightformer
                        form="rect"
                        intensity={40}
                        position={[8, 3, 2]}
                        scale={80}
                        rotation-y={-Math.PI / 4}
                        color="#f0f0f0"
                    />
                    <Lightformer
                        form="rect"
                        intensity={25}
                        position={[0, -6, 8]}
                        scale={60}
                        color="#e8e8e8"
                    />
                    <Lightformer
                        form="rect"
                        intensity={20}
                        position={[0, 8, -6]}
                        scale={60}
                        color="#ffffff"
                    />
                </group>
            </Environment>

            <spotLight
                position={[-4, 8, 4]}
                angle={0.2}
                decay={0}
                intensity={Math.PI * 1.0}
                color="#ffffff"
                castShadow
            />

            <spotLight
                position={[4, 3, 6]}
                angle={0.25}
                decay={0}
                intensity={Math.PI * 0.5}
                color="#f5f5f5"
            />

            <spotLight
                position={[0, -20, 8]}
                angle={0.15}
                decay={0}
                intensity={Math.PI * 0.2}
                color="#e0e0e0"
            />

            <spotLight
                position={[0, 12, 6]}
                angle={0.12}
                decay={0.1}
                intensity={Math.PI * 1.2}
                color="#ffffff"
            />

            <spotLight
                position={[-6, 4, 8]}
                angle={0.3}
                decay={0}
                intensity={Math.PI * 0.6}
                color="#fafafa"
            />

            <spotLight
                position={[6, 2, -4]}
                angle={0.25}
                decay={0}
                intensity={Math.PI * 0.4}
                color="#d0d0d0"
            />

            <pointLight
                position={[0, 0, 12]}
                intensity={Math.PI * 0.15}
                color="#ffffff"
                distance={30}
            />
        </group>
    )
}
export default StudioLights
