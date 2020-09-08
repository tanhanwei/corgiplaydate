/**
 * Written by Tan Han Wei for Facebook Augmented Reality Hackathon.
 * September 2020
 * These modes are used for the user to switch mode and generate next action/animation
 * Each modes are only effective once the previous animation has ended.
 */
export const modes = {
    FREE: 'free',
    //Corgi behaves with non-uniform random actions and motions
    CATCHUP: 'catchUp',
    //Corgi will always move into the Line of Sight (LOS) after the end of each action and motion
    //Used with ATTENTION
    ATTENTION: 'attention',
    //Corgi gives full attention to the device's LOS
    PLAY: 'play',
    //Corgi will walk into LOS and shows excitement
    //Used with ATTENTIONTOPLAY
    ATTENTIONTOPLAY: 'attentionToPlay',
    //Corgi responds based on LOS before the frisbee is thrown
    //The frisbee can be triggered to be thrown in this mode
    //If comes from THROW mode, Corgi will 'drop' the frisbee to the user
    THROW: 'throw',
    //The frisbee will be in motion
    //Corgi will start chasing and catch the frisbee
    //Used with ATTENTIONTOPLAY
    RESET: 'reset',
    //User can reset the plane tracker and re-position the dog
    TEST: 'test'
    //For direct testing purposes only
}