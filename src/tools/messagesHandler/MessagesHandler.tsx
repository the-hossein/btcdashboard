import React from "react";
import Style from "./MessageHandler.module.scss";
import { InfoCircle, TickCircle } from "iconsax-react";
import { MessageType } from "../../viewModel/enums/MessageType";
interface Props {
  message?: string;
  type?: MessageType | null;
}

export const MessageHandler: React.FC<Props> = ({
  message = "",
  type = null,
}) => {
  const messageTypeHandler = () => {
    switch (type) {
      case MessageType.Error:
        return <InfoCircle size="24" color="var(--error)" />;
      case MessageType.Success:
        return <TickCircle size="24" color="var(--success)" />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`${Style.error_message} ${
        type === MessageType.Success && Style.success_msg
      }`}
    >
      {messageTypeHandler()}
      <span>{message}</span>
    </div>
  );
};
