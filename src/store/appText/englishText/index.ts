import { AppText } from "../russianText";

export const englishText: AppText = {
    errorBoundary: {
        standardErrorContent: {
            text: "Something went wrong\nPlease try again or check back later.",
            button: "Go to Main"
        }
    },
    header: {
        faq: "FAQ",
        lk: "My account",
        login: "Log in",
        register: "Sign up"
    },
    footer: {
        terms: "User agreement",
        privacy: "Privacy policy"
    },
    homePage: {
        banner: {
            title: {
                improve: "Improve",
                yourSpeaking: " your\nspeaking",
                skills: " skills"
            },
            text: "Describe various objects you see on the screen and improve your thinking."
        },
        summary: {
            descriptionText: {
                paragraphOne: "Lacking words during conversation (interview or public speech), unable to find the right word or"
                    + " even getting stuck, are common problems.",
                paragraphTwo: {
                    recordYourOwnSpeech: "Recording your own speech",
                    trainDialogs: "  and practicing dialogues with family and friends has long been used",
                    lowStressLevel: " to reduce stress",
                    selfConfidence: " before an important performance and increase self-confidence."
                }
            },
            cardText: "You will see an image — it can be a sunset, a couch, or a panda — and your task is to describe"
                + " what you see first from a positive aspect, then from a negative aspect, and finally reach a conclusion."
        },
        study: {
            title: {
                together: "С ",
                you_will: " you will"
            },
            cards: [
                { 
                    id: 1,
                    title: "Talk",
                    text: "TalkAboutAll helps you improve your speaking skills by allowing you to listen to yourself,"
                        + " analyze your speech, and identify areas for improvement such as grammar and vocabulary use."
                },
                { 
                    id: 2,
                    title: "Listen",
                    text: "Hearing yourself from the side, you can calmly analyze what you have heard and evaluate your"
                        + " monologue based on the quality of the words used, the presence of pauses, the speed and any"
                        +  "other way you like."
                },
                { 
                    id: 3,
                    title: "Notice",
                    text: "Watching the video, you will not only assess  your appearance, but also the"
                        + " surroundings. For example, you are preparing for an interview or another important video"
                        + " conference and an ironing board behind your back will not be the best background. Articulation,"
                        + " gestures, eye contact, posture and lighting — there are dozens of little things you can pay"
                        + " attention to."
                },{ 
                    id: 4,
                    title: "Comment",
                    text: "In 24 hours after recording, you can leave a written comment for yourself — praise, evaluation"
                    + " of your progress, notes for the future or a reminder for next time. After all, it is scientifically"
                    + " proven that written or spoken words are better absorbed than spoken words."
                }
            ]
        },
        speech: {
            improve: "Improve",
            your_speech_and_thinking: " your speech and thinking",
            by_yourself: " by yourself",
            under_comfortable_conditions: " under comfortable conditions", 
            right_now: " right now"
        },
        buttons: {
            start: "Let's\u202FStart"
        }
    },
    errorPages: {
        error_400: {
            title: "What you are looking for does not exist.\nTry another page",
            altMoon: "Moon",
            altAstronaut: "Astronaut",
            goToMain: "Go to Main"
        },
        error_500: {
            title: "An error has occurred and we are working to fix the problem.\nPlease try again later.",
            altError: "Error",
            reload: "Reload"
        }
    },
    faqPage: {
        title: "We prepared answers to frequent questions for you",
        faqs: [
            { id: 1, question: "What is the service for?", answer: "Recording your own speeches and practicing dialogues with family or friends are long-used tools that can help you reduce stress and tension before an important speech and increase confidence in your abilities. Such training helps you practice your speech and develop the necessary skills for successful public speaking. Recording your speeches can also help you identify weaknesses and learn how to correct them, to achieve even greater confidence in yourself in future speeches."},
            { id: 2, question: "How do I register?", answer: "You can register by clicking the button in the top right corner or by following the link provided."},
            { id: 3, question: "Profile editing.", answer: "In your personal account, you can change your name, surname, and password."},
            { id: 4, question: "How do I check my camera and microphone?", answer: "Before recording a video, you always have access to test video and audio recording functionality."},
            { id: 5, question: "Can I use the service without a camera?", answer: "Yes, it is possible to use the service without a webcam, in which case only audio recording will take place. We recommend using the service to record videos so that you can prepare for video meetings and not feel uncomfortable during them."},
            { id: 6, question: "Image description.", answer: "The service automatically suggests describing the positive and negative aspects of the image by generating them randomly. The summary is always at the end of the recording."},
            { id: 7, question: "Appearance of images and words.", answer: "Categories, words, and images are generated randomly from a list of words that you have not described before."},
            { id: 8, question: "Video recording: How many attempts can I make per day? How long does video recording last?", answer: "In the basic functionality, it is possible to record up to 3 videos per day with a total duration of 5 minutes."},
            { id: 9, question: "Where can I find my video? How do I watch recorded videos? Can I download videos?", answer: "Access to recorded videos is available 24 hours after recording. You can watch videos in your personal account. Also, on the video page, there is functionality that allows you to download or send the video to the email address specified during registration."},
            { id: 10, question: "Why can I only watch videos after 24 hours?", answer: "Analyzing your actions with a delay is more effective. This allows for a more objective approach to evaluating events and taking into account possible changes or developments that may have occurred between then and now. Also, the time interval may give you the opportunity to calm down and analyze your actions from a distance, which can help avoid emotional reactions or prejudices."},
            { id: 11, question: "How do I delete my account? How do I delete my data?", answer: "You can delete your account in your personal account. When deleting an account, all your data, as well as audio and video files, are completely deleted without the possibility of recovery."},
            { id: 12, question: "How long are videos stored?", answer: "In the basic tariff, videos are stored for 2 weeks from the date of recording, then converted to audio."},
            { id: 13, question: "How long are audio files stored?", answer: "Audio files are stored until your account is deleted."},
            { id: 14, question: "Is it safe? Who can watch my videos?", answer: "All data is stored in an anonymous and encrypted format."},
            { id: 15, question: "Is it free?", answer: "The basic functionality of the service is free. You can familiarize yourself with paid options by following the link."},
            { id: 16, question: "Are there age restrictions?", answer: "The basic functionality of the service has no age restrictions, but paid tariffs require confirmation of age from 18 years old."},
            { id: 17, question: "Problem solving (Technical support)", answer: "For all questions related to the operation of the service, you can contact us by email at mail@talkaboutall.ru"},
            { id: 18, question: "Language switching.", answer: "The service supports two languages: Russian and English. The language switch button is located in the upper right corner."},
            { id: 19, question: "Can comments be edited?", answer: "Comments on videos can be edited at any time."},
            { id: 20, question: "Sorting videos/audio and selective viewing.", answer: "Our application offers a convenient way to store and analyze your video/audio recordings. All recordings are sorted by date in descending order, so you can always quickly find the latest recordings. In addition, we offer the ability to filter recordings by positive and negative traits, making it easy to analyze scenarios with positive or negative outcomes."},
            { id: 21, question: "Link to our rules.", answer: "You can familiarize yourself with the rules of using the service by following the link provided."},
            { id: 22, question: "If your account has been hacked.", answer: "Please contact our support team at mail@talkaboutall.ru."},
            { id: 23, question: "To file a complaint about a privacy violation.", answer: "Please contact our support team at mail@talkaboutall.ru."},
        ]
    }
}