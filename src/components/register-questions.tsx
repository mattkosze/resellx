import { useState } from "react";
import { QuestionProps } from "../interfaces";

const One = ({ next, notify }: QuestionProps) => {
  return (
    <div className="flex flex-col justify-between bg-white border-[2px] border-[#CCCCCC] rounded-[10px] py-[25px] px-[35px] gap-[15px] overflow-hidden flex-wrap">
      <div className="font-semibold text-[23px]">
        <span className="text-[#032853]">Hey there! Thanks for choosing</span>

        <span className="bg-clip-text text-transparent bg-gradient-[277.49deg] from-[#2E6AFF] to-[#628FFF]">
          &nbsp;ResellX
        </span>

        <span className="text-[#032853]">
          , the first step in your reselling journey!
        </span>
      </div>

      <div className="flex flex-col gap-[60px]">
        <span className="w-full text-medium text-[#7A8CA1] text-[16px]">
          We’re going to guide you through the setup process, so please follow
          the instructions as they are provided - but you can always adjust
          settings as you please in the future.
        </span>

        <button
          onClick={next}
          className="w-[160px] h-[50px] bg-gradient-[277.49deg] from-[#2E6AFF] to-[#628FFF] font-semibold text-white text-[14px] rounded-[5px]"
        >
          Let's Go!
        </button>
      </div>
    </div>
  );
};

const Two = ({ next, notify }: QuestionProps) => {
  return (
    <div className="flex flex-col justify-between bg-white border-[2px] border-[#CCCCCC] rounded-[10px] py-[25px] px-[35px] gap-[15px] overflow-hidden flex-wrap">
      <span className="font-semibold text-[23px] text-[#032853]">
        First, lets create a Discord server for ResellX to ping in.
      </span>

      <div className="flex flex-col gap-[5px]">
        <span className="text-medium text-[#7A8CA1] text-[16px]">
          Please follow the button to be directed to Discord in a new tab, there
          you can follow the steps in the video and get started on your journey
          with ResellX!
        </span>

        <div className="flex flex-col gap-[10px]">
          <span className="text-medium text-[#7A8CA1] text-[16px]">
            Note: If you already have a discord server you’d like to use,
            disregard this step and click on “Next”.
          </span>

          <div className="flex flex-col gap-[30px]">
            <iframe
              className="rounded-[5px] drop-shadow-lg w-full h-[300px] max-w-[500px]"
              src="https://www.youtube.com/embed/VyTarjUjNMQ"
            ></iframe>

            <button
              onClick={next}
              className="w-[160px] h-[50px] bg-gradient-[277.49deg] from-[#2E6AFF] to-[#628FFF] font-semibold text-white text-[14px] rounded-[5px]"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Three = ({ next, notify }: QuestionProps) => {
  return (
    <div className="flex flex-col justify-between bg-white border-[2px] border-[#CCCCCC] rounded-[10px] py-[25px] px-[35px] gap-[15px] overflow-hidden flex-wrap">
      <span className="font-semibold text-[23px] text-[#032853]">
        Next up, lets create a couple of message channels for ResellX to work
        in.
      </span>

      <div className="flex flex-col gap-[10px]">
        <span className="text-medium text-[#7A8CA1] text-[16px]">
          Note: If you already have channels that you’d like to use, disregard
          this step and click on “Next”.
        </span>

        <div className="flex flex-col gap-[30px]">
          <iframe
            className="rounded-[5px] drop-shadow-lg w-full h-[300px] max-w-[500px]"
            src="https://www.youtube.com/embed/zz8frWcmthA"
          ></iframe>

          <button
            onClick={next}
            className="w-[160px] h-[50px] bg-gradient-[277.49deg] from-[#2E6AFF] to-[#628FFF] font-semibold text-white text-[14px] rounded-[5px]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const Four = ({ next, notify }: QuestionProps) => {
  return (
    <div className="flex flex-col justify-between bg-white border-[2px] border-[#CCCCCC] rounded-[10px] py-[25px] px-[35px] gap-[15px] overflow-hidden flex-wrap">
      <span className="font-semibold text-[23px] text-[#032853]">
        Now, lets create a couple of webhooks in your Discord channel and
        personalize them!
      </span>

      <div className="flex flex-col gap-[10px]">
        <span className="text-medium text-[#7A8CA1] text-[16px]">
          Note: If you already have a webhook you’d like to use, disregard this
          step and click on “Next”.
        </span>

        <div className="flex flex-col gap-[30px]">
          <iframe
            className="rounded-[5px] drop-shadow-lg w-full h-[300px] max-w-[500px]"
            src="https://www.youtube.com/embed/e7U1YZNgwnY"
          ></iframe>

          <button
            onClick={next}
            className="w-[160px] h-[50px] bg-gradient-[277.49deg] from-[#2E6AFF] to-[#628FFF] font-semibold text-white text-[14px] rounded-[5px]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const Five = ({ next, notify }: QuestionProps) => {
  return (
    <div className="flex flex-col justify-between bg-white border-[2px] border-[#CCCCCC] rounded-[10px] py-[25px] px-[35px] gap-[15px] overflow-hidden flex-wrap">
      <span className="font-semibold text-[23px] text-[#032853]">
        Now, with the webhooks created, let’s assign them to a couple of
        monitors.
      </span>

      <div className="flex flex-col gap-[10px]">
        <span className="text-medium text-[#7A8CA1] text-[16px]">
          Note: If you know how to copy and paste webhooks, you can disregard
          this slide and click “next”.
        </span>

        <div className="flex flex-col gap-[30px]">
          <iframe
            className="rounded-[5px] drop-shadow-lg w-full h-[300px] max-w-[500px]"
            src="https://www.youtube.com/embed/Ij65wvAGX-c"
          ></iframe>

          <button
            onClick={next}
            className="w-[160px] h-[50px] bg-gradient-[277.49deg] from-[#2E6AFF] to-[#628FFF] font-semibold text-white text-[14px] rounded-[5px]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const Six = ({ next, notify }: QuestionProps) => {
  const [webhook, setWebhook] = useState("");

  return (
    <div className="flex flex-col justify-between bg-white border-[2px] border-[#CCCCCC] rounded-[10px] py-[25px] px-[35px] gap-[15px] overflow-hidden flex-wrap">
      <span className="font-semibold text-[23px] text-[#032853]">
        Now, with the webhooks created, let’s assign them to a couple of
        monitors.
      </span>

      <div className="flex flex-col gap-[50px]">
        <div className="flex flex-col gap-[35px]">
          <div className="flex text-medium text-[#7A8CA1] text-[16px]">
            <span>Note: This step&nbsp;</span>

            <span className="underline underline-offset-[2.5px]">cannot</span>

            <span>&nbsp;be skipped.</span>
          </div>

          <div className="flex flex-col gap-[15px]">
            <span className="font-medium text-[#032853] text-[16px]">
              Input a Webhook URL for KITH Releases
            </span>

            <div className="flex flex-wrap gap-[25px]">
              <input
                type="text"
                placeholder="Webhook URL..."
                onChange={(e) => {
                  setWebhook(e.target.value);
                }}
                className="w-full max-w-[500px] h-[40px] font-medium text-[14px] text-[#032853] border-[1.5px] border-[#CCCCCC] rounded-[5px] px-[15px]"
              />

              <button className="w-[125px] h-[40px] bg-[#032853] font-semibold text-white text-[14px] rounded-[5px]">
                Test
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            if (webhook === "") return;

            next();
          }}
          className="w-[160px] h-[50px] bg-gradient-[277.49deg] from-[#2E6AFF] to-[#628FFF] font-semibold text-white text-[14px] rounded-[5px]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Seven = ({ next, notify }: QuestionProps) => {
  const [webhook, setWebhook] = useState("");

  return (
    <div className="flex flex-col justify-between bg-white border-[2px] border-[#CCCCCC] rounded-[10px] py-[25px] px-[35px] gap-[15px] overflow-hidden flex-wrap">
      <span className="font-semibold text-[23px] text-[#032853]">
        Now, with the webhooks created, let’s assign them to a couple of
        monitors.
      </span>

      <div className="flex flex-col gap-[50px]">
        <div className="flex flex-col gap-[35px]">
          <div className="flex text-medium text-[#7A8CA1] text-[16px]">
            <span>Note: This step&nbsp;</span>

            <span className="underline underline-offset-[2.5px]">cannot</span>

            <span>&nbsp;be skipped.</span>
          </div>

          <div className="flex flex-col gap-[15px]">
            <span className="font-medium text-[#032853] text-[16px]">
              Input a Webhook URL for UNDEFEATED Releases
            </span>

            <div className="flex flex-wrap gap-[25px]">
              <input
                type="text"
                placeholder="Webhook URL..."
                onChange={(e) => {
                  setWebhook(e.target.value);
                }}
                className="w-full max-w-[500px] h-[40px] font-medium text-[14px] text-[#032853] border-[1.5px] border-[#CCCCCC] rounded-[5px] px-[15px]"
              />

              <button className="w-[125px] h-[40px] bg-[#032853] font-semibold text-white text-[14px] rounded-[5px]">
                Test
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            if (webhook === "") return;

            next();
          }}
          className="w-[160px] h-[50px] bg-gradient-[277.49deg] from-[#2E6AFF] to-[#628FFF] font-semibold text-white text-[14px] rounded-[5px]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Eight = ({ next, notify }: QuestionProps) => {
  return (
    <div className="flex flex-col justify-between bg-white border-[2px] border-[#CCCCCC] rounded-[10px] py-[25px] px-[35px] gap-[15px] overflow-hidden flex-wrap">
      <span className="font-semibold text-[23px] text-[#032853]">
        With the basic stuff out of the way, it’s time to set up individualized
        parameters that will be directly factored into how you are notified of
        releases’ profits.
      </span>

      <div className="flex flex-col gap-[60px]">
        <span className="text-medium text-[#7A8CA1] text-[16px]">
          As always, you change these later in your “preferences” tab.
        </span>

        <button
          onClick={next}
          className="w-[160px] h-[50px] bg-gradient-[277.49deg] from-[#2E6AFF] to-[#628FFF] font-semibold text-white text-[14px] rounded-[5px]"
        >
          Take me to it!
        </button>
      </div>
    </div>
  );
};

const Nine = ({ next, notify }: QuestionProps) => {
  const [percentage, setPercentage] = useState("");

  return (
    <div className="flex flex-col justify-between bg-white border-[2px] border-[#CCCCCC] rounded-[10px] py-[25px] px-[35px] gap-[15px] overflow-hidden flex-wrap">
      <div>
        <span className="font-semibold text-[23px] text-[#032853]">
          For ResellX to serve you best, please define your preferences about
          the following parameters.
        </span>

        <span className="font-semibold text-[23px] text-[#FF6262]">*</span>
      </div>

      <div className="flex flex-col gap-[50px]">
        <div className="flex flex-col gap-[35px]">
          <div className="flex text-medium text-[#7A8CA1] text-[16px]">
            <span>Note: This step&nbsp;</span>

            <span className="underline underline-offset-[2.5px]">cannot</span>

            <span>&nbsp;be skipped.</span>
          </div>

          <div className="flex flex-col gap-[15px]">
            <span className="font-medium text-[#032853] text-[16px]">
              What percentage do you consider a “bad” profit?
            </span>

            <div className="flex flex-col gap-[12.5px]">
              <input
                type="number"
                placeholder="Less than _ %"
                onChange={(e) => {
                  setPercentage(e.target.value);
                }}
                className="w-full max-w-[500px] h-[40px] font-medium text-[14px] text-[#032853] border-[1.5px] border-[#CCCCCC] rounded-[5px] px-[15px]"
              />

              <div className="font-medium text-[14px]">
                <span className="text-[#7A8CA1]">
                  Don’t know? Read our guide on profit margins&nbsp;
                </span>

                <span className="underline underline-offset-[2.5px] text-[#628FFF]">
                  here
                </span>

                <span className="text-[#7A8CA1]">!</span>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            if (percentage === "") return;

            next();
          }}
          className="w-[160px] h-[50px] bg-gradient-[277.49deg] from-[#2E6AFF] to-[#628FFF] font-semibold text-white text-[14px] rounded-[5px]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Ten = ({ next, notify }: QuestionProps) => {
  const [percentage, setPercentage] = useState("");

  return (
    <div className="flex flex-col justify-between bg-white border-[2px] border-[#CCCCCC] rounded-[10px] py-[25px] px-[35px] gap-[15px] overflow-hidden flex-wrap">
      <div>
        <span className="font-semibold text-[23px] text-[#032853]">
          For ResellX to serve you best, please define your preferences about
          the following parameters.
        </span>

        <span className="font-semibold text-[23px] text-[#FF6262]">*</span>
      </div>

      <div className="flex flex-col gap-[50px]">
        <div className="flex flex-col gap-[35px]">
          <div className="flex text-medium text-[#7A8CA1] text-[16px]">
            <span>Note: This step&nbsp;</span>

            <span className="underline underline-offset-[2.5px]">cannot</span>

            <span>&nbsp;be skipped.</span>
          </div>

          <div className="flex flex-col gap-[15px]">
            <span className="font-medium text-[#032853] text-[16px]">
              What percentage do you consider a "good" profit?
            </span>

            <div className="flex flex-col gap-[12.5px]">
              <input
                type="number"
                placeholder="More than _ %"
                onChange={(e) => {
                  setPercentage(e.target.value);
                }}
                className="w-full max-w-[500px] h-[40px] font-medium text-[14px] text-[#032853] border-[1.5px] border-[#CCCCCC] rounded-[5px] px-[15px]"
              />

              <div className="font-medium text-[14px]">
                <span className="text-[#7A8CA1]">
                  Don’t know? Read our guide on profit margins&nbsp;
                </span>

                <span className="underline underline-offset-[2.5px] text-[#628FFF]">
                  here
                </span>

                <span className="text-[#7A8CA1]">!</span>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            if (percentage === "") return;

            next();
          }}
          className="w-[160px] h-[50px] bg-gradient-[277.49deg] from-[#2E6AFF] to-[#628FFF] font-semibold text-white text-[14px] rounded-[5px]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Eleven = ({ next, notify }: QuestionProps) => {
  const [state, setState] = useState("");

  return (
    <div className="flex flex-col justify-between bg-white border-[2px] border-[#CCCCCC] rounded-[10px] py-[25px] px-[35px] gap-[15px] overflow-hidden flex-wrap">
      <div>
        <span className="font-semibold text-[23px] text-[#032853]">
          For ResellX to serve you best, please define your preferences about
          the following parameters.
        </span>

        <span className="font-semibold text-[23px] text-[#FF6262]">*</span>
      </div>

      <div className="flex flex-col gap-[50px]">
        <div className="flex flex-col gap-[35px]">
          <div className="flex text-medium text-[#7A8CA1] text-[16px]">
            <span>Note: This step&nbsp;</span>

            <span className="underline underline-offset-[2.5px]">can</span>

            <span>&nbsp;be skipped.</span>
          </div>

          <div className="flex flex-col gap-[15px]">
            <span className="font-medium text-[#032853] text-[16px]">
              What state do you live in?
            </span>

            <div className="flex flex-col gap-[12.5px]">
              <input
                type="text"
                placeholder="NY"
                onChange={(e) => {
                  setState(e.target.value);
                }}
                className="w-[70px] h-[40px] font-medium text-[14px] text-[#032853] border-[1.5px] border-[#CCCCCC] rounded-[5px] px-[15px]"
              />

              <span className="font-medium text-[#7A8CA1] text-[14px]">
                Personal Information will never be shared.
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={next}
          className="w-[160px] h-[50px] bg-gradient-[277.49deg] from-[#2E6AFF] to-[#628FFF] font-semibold text-white text-[14px] rounded-[5px]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Twelve = ({ next, notify }: QuestionProps) => {
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col justify-between bg-white border-[2px] border-[#CCCCCC] rounded-[10px] py-[25px] px-[35px] gap-[15px] overflow-hidden flex-wrap">
      <div>
        <span className="font-semibold text-[23px] text-[#032853]">
          Let’s get your information to set you up with an account.
        </span>

        <span className="font-semibold text-[23px] text-[#FF6262]">*</span>
      </div>

      <div className="flex flex-col gap-[50px]">
        <div className="flex flex-col gap-[35px]">
          <div className="flex text-medium text-[#7A8CA1] text-[16px]">
            <span>Note: This step&nbsp;</span>

            <span className="underline underline-offset-[2.5px]">cannot</span>

            <span>&nbsp;be skipped.</span>
          </div>

          <div className="flex flex-col gap-[15px]">
            <span className="font-medium text-[#032853] text-[16px]">
              What is your Email?
            </span>

            <div className="flex flex-col gap-[12.5px]">
              <input
                type="text"
                placeholder="Enter Email Address"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="w-full max-w-[500px] h-[40px] font-medium text-[14px] text-[#032853] border-[1.5px] border-[#CCCCCC] rounded-[5px] px-[15px]"
              />

              <span className="font-medium text-[#7A8CA1] text-[14px]">
                Personal Information will never be shared.
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            if (email === "") return;

            next();
          }}
          className="w-[160px] h-[50px] bg-gradient-[277.49deg] from-[#2E6AFF] to-[#628FFF] font-semibold text-white text-[14px] rounded-[5px]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Thirteen = ({ next, notify }: QuestionProps) => {
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  return (
    <div className="flex flex-col justify-between bg-white border-[2px] border-[#CCCCCC] rounded-[10px] py-[25px] px-[35px]  gap-[15px] overflow-hidden flex-wrap">
      <div>
        <span className="font-semibold text-[23px] text-[#032853]">
          To stay in touch, please enter some personal information.
        </span>

        <span className="font-semibold text-[23px] text-[#FF6262]">*</span>
      </div>

      <div className="flex flex-col gap-[50px]">
        <div className="flex flex-col gap-[35px]">
          <div className="flex text-medium text-[#7A8CA1] text-[16px]">
            <span>Note: This step&nbsp;</span>

            <span className="underline underline-offset-[2.5px]">cannot</span>

            <span>&nbsp;be skipped.</span>
          </div>

          <div className="flex flex-col gap-[15px]">
            <span className="font-medium text-[#032853] text-[16px]">
              Create a password
            </span>

            <input
              type="password"
              placeholder="********"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="w-full max-w-[500px] h-[40px] font-medium text-[14px] text-[#032853] border-[1.5px] border-[#CCCCCC] rounded-[5px] px-[15px]"
            />

            <span className="font-medium text-[#032853] text-[16px]">
              Repeat password
            </span>

            <input
              type="password"
              placeholder="********"
              onChange={(e) => {
                setRepeatedPassword(e.target.value);
              }}
              className="w-full max-w-[500px] h-[40px] font-medium text-[14px] text-[#032853] border-[1.5px] border-[#CCCCCC] rounded-[5px] px-[15px]"
            />

            <div className="flex flex-col gap-[12.5px]">
              <span className="font-medium text-[#7A8CA1] text-[14px]">
                Personal Information will never be shared.
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            if (password === "" || repeatedPassword === "") return;
            if (password != repeatedPassword) return;

            next();
          }}
          className="w-[160px] h-[50px] bg-gradient-[277.49deg] from-[#2E6AFF] to-[#628FFF] font-semibold text-white text-[14px] rounded-[5px]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Fourteen = ({ next, notify }: QuestionProps) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="flex flex-col justify-between bg-white border-[2px] border-[#CCCCCC] rounded-[10px] py-[25px] px-[35px]  gap-[15px] overflow-hidden flex-wrap">
      <div>
        <span className="font-semibold text-[23px] text-[#032853]">
          Let’s get your information to set you up with an account.
        </span>

        <span className="font-semibold text-[23px] text-[#FF6262]">*</span>
      </div>

      <div className="flex flex-col gap-[50px]">
        <div className="flex flex-col gap-[35px]">
          <div className="flex text-medium text-[#7A8CA1] text-[16px]">
            <span>Note: This step&nbsp;</span>

            <span className="underline underline-offset-[2.5px]">can</span>

            <span>&nbsp;be skipped.</span>
          </div>

          <div className="flex flex-col gap-[15px]">
            <span className="font-medium text-[#032853] text-[16px]">
              What is your Phone Number?
            </span>

            <div className="flex flex-col gap-[12.5px]">
              <input
                type="text"
                placeholder="Enter Phone Number"
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                className="w-full max-w-[500px] h-[40px] font-medium text-[14px] text-[#032853] border-[1.5px] border-[#CCCCCC] rounded-[5px] px-[15px]"
              />

              <span className="font-medium text-[#7A8CA1] text-[14px]">
                Personal Information will never be shared.
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={next}
          className="w-[160px] h-[50px] bg-gradient-[277.49deg] from-[#2E6AFF] to-[#628FFF] font-semibold text-white text-[14px] rounded-[5px]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Fifteen = ({ next, notify }: QuestionProps) => {
  return (
    <div className="flex flex-col justify-between bg-white border-[2px] border-[#CCCCCC] rounded-[10px] py-[25px] px-[35px] gap-[15px] overflow-hidden flex-wrap">
      <span className="font-semibold text-[23px] text-[#032853]">
        Congratulations, ResellX has now been set up and is ready for use! 🎉
      </span>

      <div className="flex flex-col gap-[60px]">
        <span className="text-medium text-[#7A8CA1] text-[16px]">
          Simply press "On" at the top of the main home page to activate and see
          your hard work come to fruition.
        </span>

        <a href="/login">
          <button className="w-[160px] h-[50px] bg-gradient-[277.49deg] from-[#2E6AFF] to-[#628FFF] font-semibold text-white text-[14px] rounded-[5px]">
            Get Started
          </button>
        </a>
      </div>
    </div>
  );
};

export default {
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Eleven,
  Twelve,
  Thirteen,
  Fourteen,
  Fifteen,
};
