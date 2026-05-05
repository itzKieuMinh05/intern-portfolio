/**
 * Node modules
 */
import PropTypes from "prop-types";

/**
 * Primary Button Component
 */
const ButtonPrimary = ({
  href, 
  target = '_self',
  label, 
  icon, 
  classes,
  onClick
}) => {
    if (href) {
        const isDownload = href.endsWith('.pdf') || href.endsWith('.docx');

        return (
            <a 
                href={href}
                target={target}
                download={isDownload ? true : undefined}
                className={"btn btn-primary " + (classes || "")}
            >
                {label}

                {icon ? 
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                : null}
            </a>
        );
    } else {
      return (
        <button onClick={onClick} className={"btn btn-primary " + (classes || "")}>
                {label}

                {icon ?
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                : null}
            </button>
        );
    }
};


ButtonPrimary.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  classes: PropTypes.string,
  onClick: PropTypes.func,
};

/**
 * Outline Button Component
 */
const ButtonOutline = ({
  href,
  target = "_self",
  label,
  icon,
  classes = "",
  onClick,
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={`btn btn-outline ${classes}`}
      >
        {label}

        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`btn btn-outline ${classes}`}>
      {label}

      {icon && (
        <span className="material-symbols-rounded" aria-hidden="true">
          {icon}
        </span>
      )}
    </button>
  );
};

ButtonOutline.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  classes: PropTypes.string,
  onClick: PropTypes.func,
};

export { ButtonPrimary, ButtonOutline };
