import { useState } from "react";
import { RegisterQuestions } from "../../components";
import { PageProps } from "../../interfaces";

const Register = ({ notify }: PageProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const next = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const questions = [
    <RegisterQuestions.One next={next} notify={notify} />,
    <RegisterQuestions.Two next={next} notify={notify} />,
    <RegisterQuestions.Three next={next} notify={notify} />,
    <RegisterQuestions.Four next={next} notify={notify} />,
    <RegisterQuestions.Five next={next} notify={notify} />,
    <RegisterQuestions.Six next={next} notify={notify} />,
    <RegisterQuestions.Seven next={next} notify={notify} />,
    <RegisterQuestions.Eight next={next} notify={notify} />,
    <RegisterQuestions.Nine next={next} notify={notify} />,
    <RegisterQuestions.Ten next={next} notify={notify} />,
    <RegisterQuestions.Eleven next={next} notify={notify} />,
    <RegisterQuestions.Twelve next={next} notify={notify} />,
    <RegisterQuestions.Thirteen next={next} notify={notify} />,
    <RegisterQuestions.Fourteen next={next} notify={notify} />,
    <RegisterQuestions.Fifteen next={next} notify={notify} />,
  ];

  return (
    <div className="flex h-screen flex-col items-center px-[50px] md:px-[125px] pt-[150px] bg-[#F0F0F0]">
      <div className="flex flex-col gap-[50px]">
        <div className="flex items-center gap-[3px]">
          <div
            className={`flex items-center justify-center w-[37.5px] h-[37.5px] ${
              currentQuestion >= 7 ? "bg-[#CCD8F4]" : "bg-[#FFF9F9]"
            } border-[1.5px] border-[#628FFF] rounded-full`}
          >
            <span
              className={`font-bold ${
                currentQuestion >= 7 ? "text-[#628FFF]" : "text-[#7A8CA1]"
              } text-[16px]`}
            >
              1
            </span>
          </div>

          {currentQuestion >= 7 ? (
            <div className="bg-[#628FFF] w-[55px] h-[2px]"></div>
          ) : (
            <div className="flex gap-[5px]">
              <div className="w-[5px] h-[2px] bg-[#7A8CA1]"></div>
              <div className="w-[5px] h-[2px] bg-[#7A8CA1]"></div>
              <div className="w-[5px] h-[2px] bg-[#7A8CA1]"></div>
              <div className="w-[5px] h-[2px] bg-[#7A8CA1]"></div>
              <div className="w-[5px] h-[2px] bg-[#7A8CA1]"></div>
              <div className="w-[5px] h-[2px] bg-[#7A8CA1]"></div>
            </div>
          )}

          <div
            className={`flex items-center justify-center w-[37.5px] h-[37.5px] ${
              currentQuestion >= 14 ? "bg-[#CCD8F4]" : "bg-[#FFF9F9]"
            } border-[1.5px] ${
              currentQuestion >= 7 ? "border-[#628FFF]" : "border-[#CCCCCC]"
            } rounded-full`}
          >
            <span
              className={`font-bold ${
                currentQuestion >= 7 ? "text-[#628FFF]" : "text-[#7A8CA1]"
              } text-[16px]`}
            >
              2
            </span>
          </div>

          {currentQuestion >= 14 ? (
            <div className="bg-[#628FFF] w-[55px] h-[2px]"></div>
          ) : (
            <div className="flex gap-[5px]">
              <div className="w-[5px] h-[2px] bg-[#7A8CA1]"></div>
              <div className="w-[5px] h-[2px] bg-[#7A8CA1]"></div>
              <div className="w-[5px] h-[2px] bg-[#7A8CA1]"></div>
              <div className="w-[5px] h-[2px] bg-[#7A8CA1]"></div>
              <div className="w-[5px] h-[2px] bg-[#7A8CA1]"></div>
              <div className="w-[5px] h-[2px] bg-[#7A8CA1]"></div>
            </div>
          )}

          <div
            className={`flex items-center justify-center w-[37.5px] h-[37.5px] bg-[#FFF9F9] border-[1.5px] ${
              currentQuestion >= 14 ? "border-[#628FFF]" : "border-[#CCCCCC]"
            } rounded-full`}
          >
            <span
              className={`font-bold ${
                currentQuestion >= 14 ? "text-[#628FFF]" : "text-[#7A8CA1]"
              } text-[16px]`}
            >
              3
            </span>
          </div>
        </div>

        <div className="z-[99] bg-[#F0F0F0]">{questions[currentQuestion]}</div>
      </div>
    </div>
  );
};

export default Register;
