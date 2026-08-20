import { useState } from "react";
import {
  Bell,
  Check,
  CheckCheck,
  Info,
  AlertTriangle,
  CalendarCheck,
  X,
} from "lucide-react";
import "./NotificationDropdown.css";

const initialNotifications = [
  {
    id: 1,
    type: "success",
    title: "Post published",
    message: "Your post was published successfully.",
    time: "2 min ago",
    unread: true,
  },
  {
    id: 2,
    type: "schedule",
    title: "Scheduled post",
    message: "Your post is scheduled for today.",
    time: "18 min ago",
    unread: true,
  },
  {
    id: 3,
    type: "info",
    title: "Account connected",
    message: "Your social account was connected successfully.",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: 4,
    type: "warning",
    title: "Action required",
    message: "One of your connected accounts needs attention.",
    time: "3 hours ago",
    unread: false,
  },
];

function NotificationIcon({ type }) {
  if (type === "success") {
    return (
      <div className="notification-type-icon notification-success">
        <Check size={15} />
      </div>
    );
  }

  if (type === "schedule") {
    return (
      <div className="notification-type-icon notification-schedule">
        <CalendarCheck size={15} />
      </div>
    );
  }

  if (type === "warning") {
    return (
      <div className="notification-type-icon notification-warning">
        <AlertTriangle size={15} />
      </div>
    );
  }

  return (
    <div className="notification-type-icon notification-info">
      <Info size={15} />
    </div>
  );
}

function NotificationDropdown({ onClose }) {
  const [notifications, setNotifications] = useState(initialNotifications);

  const unreadCount = notifications.filter(
    (notification) => notification.unread,
  ).length;

  const markAsRead = (id) => {
    setNotifications((current) =>
      current.map((notification) =>
        notification.id === id
          ? { ...notification, unread: false }
          : notification,
      ),
    );
  };

  const markAllAsRead = () => {
    setNotifications((current) =>
      current.map((notification) => ({
        ...notification,
        unread: false,
      })),
    );
  };

  return (
    <div className="notification-dropdown">
      <div className="notification-header">
        <div>
          <div className="notification-title-row">
            <h3>Notifications</h3>

            {unreadCount > 0 && (
              <span className="notification-count">{unreadCount}</span>
            )}
          </div>

          <p>Stay updated with your workspace activity.</p>
        </div>

        <button
          type="button"
          className="notification-close"
          onClick={onClose}
          aria-label="Close notifications"
        >
          <X size={16} />
        </button>
      </div>

      <div className="notification-actions">
        <span>
          {unreadCount === 0 ? "You're all caught up" : `${unreadCount} unread`}
        </span>

        {unreadCount > 0 && (
          <button type="button" onClick={markAllAsRead}>
            <CheckCheck size={14} />
            Mark all read
          </button>
        )}
      </div>

      <div className="notification-list">
        {notifications.length === 0 ? (
          <div className="notification-empty">
            <div className="notification-empty-icon">
              <Bell size={20} />
            </div>

            <strong>No notifications</strong>

            <p>You're all caught up.</p>
          </div>
        ) : (
          notifications.map((notification) => (
            <button
              type="button"
              key={notification.id}
              className={`notification-item ${
                notification.unread ? "notification-unread" : ""
              }`}
              onClick={() => markAsRead(notification.id)}
            >
              <NotificationIcon type={notification.type} />

              <div className="notification-content">
                <div className="notification-item-title">
                  <strong>{notification.title}</strong>

                  {notification.unread && (
                    <span className="notification-unread-dot" />
                  )}
                </div>

                <p>{notification.message}</p>

                <span className="notification-time">{notification.time}</span>
              </div>
            </button>
          ))
        )}
      </div>

      <div className="notification-footer">
        <button type="button" onClick={markAllAsRead}>
          <Check size={14} />
          Mark everything as read
        </button>
      </div>
    </div>
  );
}

export default NotificationDropdown;
