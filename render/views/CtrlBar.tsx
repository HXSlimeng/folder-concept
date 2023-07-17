import { IcMax, IcMin, IcClose } from "@/icons";
import { Button } from "@nextui-org/react";
export default function CtrlBar() {
  function minimize() {
    window.ELEC.minimize();
  }
  return (
    <div className="dragBar" style={{ background: "var(--nextui-colors-backgroundContrast)", display: "flex", justifyContent: "flex-end" }}>
      <Button size="xs" className="noDragBar" icon={<IcMin />} light onClick={minimize} color="#8f8f8f" css={{ borderRadius: "unset" }} />
      <Button size="xs" className="noDragBar" icon={<IcMax />} light color="#8f8f8f" css={{ borderRadius: "unset" }} />
      <Button size="xs" className="noDragBar" icon={<IcClose />} light color="error" css={{ borderRadius: "unset" }} />
    </div>
  );
}
