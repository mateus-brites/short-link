import { HttpException, HttpStatus } from '@nestjs/common';
import errorsMessage from './errors-message';

export const userAlreadyExist = () => {
  return new HttpException(
    errorsMessage.EMAIL_ALREADY_EXIST,
    HttpStatus.BAD_REQUEST,
  );
};

export const UnauthorizedException = () => {
  return new HttpException(
    errorsMessage.AUTHENTITATION_FAILED,
    HttpStatus.BAD_REQUEST,
  );
};

export const UrlNotFoundException = () => {
  return new HttpException(errorsMessage.URL_NOT_FOUND, HttpStatus.NOT_FOUND);
};
