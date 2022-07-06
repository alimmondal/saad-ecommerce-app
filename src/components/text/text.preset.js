import { colors } from '../../themes/colors';
import { typography } from '../../themes/typography';

const BASE = {
  fontFamily: typography.primary,
  fontSize: 16,
  color: colors.black,
};

const BOLD = {
  fontFamily: typography.bold,
  color: colors.black,
};

export const presets = {
  default: BASE,
  bold: BOLD,
  h1: {
    ...BOLD,
    fontSize: 56,
  },
  h2: {
    ...BOLD,
    fontSize: 40,
  },
  h3: {
    ...BOLD,
    fontSize: 36,
  },
  h4: {
    ...BOLD,
    fontSize: 28,
  },
  h5: {
    ...BOLD,
    fontSize: 24,
  },
  h6: {
    ...BOLD,
    fontSize: 18,
  },
  overLine: {
    fontFamily: typography.regular,
    fontSize: 14,
  },
  subTitle: {
    ...BOLD,
    fontSize: 13,
  },
  title: {
    ...BOLD,
    fontSize: 14,
  },
};
