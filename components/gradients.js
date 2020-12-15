import styled from "@emotion/styled"

export const GradientForProject = styled.div`
  width: 738px;
  height: 738px;
  background: radial-gradient(
    87.16% 84.42% at 28.72% 78.86%,
    #eeeff4 0%,
    #429ed0 19.47%,
    #5863bf 37.4%,
    #dd6b57 63.54%,
    #f8a261 78.12%,
    #e4e1de 92.19%
  );
  filter: blur(50px);
  border-radius: 50%;
`

export const GradientForExperiences = styled.div`
  position: absolute;
  top: 0;
  right: -330px;
  z-index: 0;
  width: 660px;
  height: 660px;
  background: linear-gradient(
    87.31deg,
    #f7663d -11.93%,
    #ffa545 43.35%,
    #a1dcfa 93.61%
  );
  filter: blur(50px);
  transform: matrix(-0.71, -0.71, 0.71, -0.71, 0, 0);
  border-radius: 50%;
`

export const GradientForExperiencesBottom = styled.div`
  position: absolute;
  bottom: -430px;
  left: -422px;
  z-index: 0;
  width: 738px;
  height: 738px;
  background: radial-gradient(
    87.16% 84.42% at 28.72% 78.86%,
    #eeeff4 6.72%,
    #429ed0 29.47%,
    #5863bf 47.4%,
    #dd6b57 63.54%,
    #f8a261 78.12%,
    #e4e1de 92.19%
  );
  filter: blur(60px);
  border-radius: 50%;
  transform: matrix(0, -1, 1, 0, 0, 0);
`
export const GradientForFooter = styled.div`
  width: 738px;
  height: 738px;
  background: radial-gradient(
    87.16% 84.42% at 28.72% 78.86%,
    #eeeff4 6.72%,
    #429ed0 29.47%,
    #5863bf 47.4%,
    #dd6b57 63.54%,
    #f8a261 78.12%,
    #e4e1de 92.19%
  );
  filter: blur(40px);
  transform: matrix(1, 0, 0, 1, 0, 0);
  border-radius: 50%;
`
