import React from "react";

export const NoPokemonFound = ({ onTryAnotherLocation }) => {
  const handleTryAnotherLocation = () => {
    onTryAnotherLocation(true);
  };

  return (
    <div className="container text-center">
      <div className="row justify-content-md-center">
        <div className="col-md-auto">
          <h2 className="m-5">This location doesn't seem to have any pokémon.</h2>
          <button
            className="btn btn-info w-auto m-5"
            onClick={handleTryAnotherLocation}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-skip-backward-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M11.729 5.055a.5.5 0 0 0-.52.038L8.5 7.028V5.5a.5.5 0 0 0-.79-.407L5 7.028V5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V8.972l2.71 1.935a.5.5 0 0 0 .79-.407V8.972l2.71 1.935A.5.5 0 0 0 12 10.5v-5a.5.5 0 0 0-.271-.445z" />
            </svg>
            &nbsp; Locations
          </button>
        </div>
      </div>
    </div>
  );
};
