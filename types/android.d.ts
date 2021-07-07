declare module com {
	export module google {
		export module android {
			export module gms {
				export module actions {
					export class ItemListIntents extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.actions.ItemListIntents>;
						public static ACTION_CREATE_ITEM_LIST: string;
						public static ACTION_DELETE_ITEM_LIST: string;
						public static ACTION_APPEND_ITEM_LIST: string;
						public static ACTION_ACCEPT_ITEM: string;
						public static ACTION_REJECT_ITEM: string;
						public static ACTION_DELETE_ITEM: string;
						public static EXTRA_LIST_NAME: string;
						public static EXTRA_LIST_QUERY: string;
						public static EXTRA_ITEM_NAME: string;
						public static EXTRA_ITEM_NAMES: string;
						public static EXTRA_ITEM_QUERY: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module actions {
					export class NoteIntents extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.actions.NoteIntents>;
						public static ACTION_CREATE_NOTE: string;
						public static ACTION_APPEND_NOTE: string;
						public static ACTION_DELETE_NOTE: string;
						public static EXTRA_NAME: string;
						public static EXTRA_TEXT: string;
						public static EXTRA_NOTE_QUERY: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module actions {
					export class ReserveIntents extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.actions.ReserveIntents>;
						public static ACTION_RESERVE_TAXI_RESERVATION: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module actions {
					export class SearchIntents extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.actions.SearchIntents>;
						public static ACTION_SEARCH: string;
						public static EXTRA_QUERY: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module identifier {
						export class AdvertisingIdClient extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.ads.identifier.AdvertisingIdClient>;
							public finish(): void;
							public getInfo(): com.google.android.gms.ads.identifier.AdvertisingIdClient.Info;
							public static getAdvertisingIdInfo(param0: globalAndroid.content.Context): com.google.android.gms.ads.identifier.AdvertisingIdClient.Info;
							public start(): void;
							public finalize(): void;
							public constructor(param0: globalAndroid.content.Context, param1: number, param2: boolean);
							public static setShouldSkipGmsCoreVersionCheck(param0: boolean): void;
							public constructor(param0: globalAndroid.content.Context);
						}
						export module AdvertisingIdClient {
							export class Info extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.ads.identifier.AdvertisingIdClient.Info>;
								public toString(): string;
								public constructor(param0: string, param1: boolean);
								public isLimitAdTrackingEnabled(): boolean;
								public getId(): string;
							}
							export class zza extends java.lang.Thread {
								public static class: java.lang.Class<com.google.android.gms.ads.identifier.AdvertisingIdClient.zza>;
								public constructor(param0: java.lang.ThreadGroup, param1: java.lang.Runnable, param2: string, param3: number);
								public constructor(param0: java.lang.ThreadGroup, param1: string);
								public constructor(param0: java.lang.Runnable);
								public constructor(param0: java.lang.ThreadGroup, param1: java.lang.Runnable);
								public constructor(param0: java.lang.Runnable, param1: string);
								public constructor(param0: com.google.android.gms.ads.identifier.AdvertisingIdClient, param1: number);
								public constructor();
								public run(): void;
								public constructor(param0: string);
								public constructor(param0: java.lang.ThreadGroup, param1: java.lang.Runnable, param2: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module identifier {
						export class zza extends java.lang.Thread {
							public static class: java.lang.Class<com.google.android.gms.ads.identifier.zza>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module ads {
					export module identifier {
						export class zzb extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.ads.identifier.zzb>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class GoogleSignInAccount extends com.google.android.gms.common.internal.safeparcel.zza implements com.google.android.gms.common.internal.ReflectedParcelable {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignInAccount>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.signin.GoogleSignInAccount>;
								public getAccount(): globalAndroid.accounts.Account;
								public getGrantedScopes(): java.util.Set<com.google.android.gms.common.api.Scope>;
								public getGivenName(): string;
								public equals(param0: any): boolean;
								public getIdToken(): string;
								public getDisplayName(): string;
								public getFamilyName(): string;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public getPhotoUrl(): globalAndroid.net.Uri;
								public getEmail(): string;
								public getServerAuthCode(): string;
								public describeContents(): number;
								public getId(): string;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class GoogleSignInOptions extends com.google.android.gms.common.internal.safeparcel.zza implements com.google.android.gms.common.api.Api.ApiOptions.Optional, com.google.android.gms.common.internal.ReflectedParcelable {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignInOptions>;
								public static DEFAULT_SIGN_IN: com.google.android.gms.auth.api.signin.GoogleSignInOptions;
								public static DEFAULT_GAMES_SIGN_IN: com.google.android.gms.auth.api.signin.GoogleSignInOptions;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.signin.GoogleSignInOptions>;
								public getAccount(): globalAndroid.accounts.Account;
								public getServerClientId(): string;
								public describeContents(): number;
								public equals(param0: any): boolean;
								public isIdTokenRequested(): boolean;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public hashCode(): number;
								public getScopeArray(): native.Array<com.google.android.gms.common.api.Scope>;
							}
							export module GoogleSignInOptions {
								export class Builder extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder>;
									public requestServerAuthCode(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public constructor();
									public requestScopes(param0: com.google.android.gms.common.api.Scope, param1: native.Array<com.google.android.gms.common.api.Scope>): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public requestIdToken(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public addExtension(param0: com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public requestEmail(): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public setAccountName(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public requestServerAuthCode(param0: string, param1: boolean): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public setHostedDomain(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public constructor(param0: com.google.android.gms.auth.api.signin.GoogleSignInOptions);
									public requestId(): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public requestProfile(): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
									public build(): com.google.android.gms.auth.api.signin.GoogleSignInOptions;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class GoogleSignInOptionsExtension extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension>;
								/**
								 * Constructs a new instance of the com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									toBundle(): globalAndroid.os.Bundle;
								});
								public constructor();
								public toBundle(): globalAndroid.os.Bundle;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export module internal {
								export class zzm extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.signin.internal.zzn>*/ {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.zzm>;
									public constructor();
									public createFromParcel(param0: globalAndroid.os.Parcel): any;
									public newArray(param0: number): native.Array<any>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export module internal {
								export class zzn extends com.google.android.gms.common.internal.safeparcel.zza {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.zzn>;
									public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.signin.internal.zzn>*/;
									public constructor();
									public constructor(param0: com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension);
									public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
									public getType(): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export module internal {
								export class zzo extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.zzo>;
									public constructor();
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export module internal {
								export class zzy extends java.lang.Object {
									public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.zzy>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class zza extends java.util.Comparator<com.google.android.gms.common.api.Scope> {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.zza>;
								public static reverseOrder(): java.util.Comparator<any>;
								public static naturalOrder(): java.util.Comparator<any>;
								public thenComparing(param0: java.util.Comparator<any>): java.util.Comparator<any>;
								public equals(param0: any): boolean;
								public static nullsFirst(param0: java.util.Comparator<any>): java.util.Comparator<any>;
								public thenComparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
								public thenComparingInt(param0: any /* any*/): java.util.Comparator<any>;
								public static comparingInt(param0: any /* any*/): java.util.Comparator<any>;
								public static nullsLast(param0: java.util.Comparator<any>): java.util.Comparator<any>;
								public static comparing(param0: any /* any*/): java.util.Comparator<any>;
								public thenComparing(param0: any /* any*/): java.util.Comparator<any>;
								public static comparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
								public static comparingDouble(param0: any /* any*/): java.util.Comparator<any>;
								public thenComparingDouble(param0: any /* any*/): java.util.Comparator<any>;
								public static comparingLong(param0: any /* any*/): java.util.Comparator<any>;
								public compare(param0: any, param1: any): number;
								public reversed(): java.util.Comparator<any>;
								public thenComparingLong(param0: any /* any*/): java.util.Comparator<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class zzb extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.signin.GoogleSignInAccount> {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.zzb>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public newArray(param0: number): native.Array<any>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class zzc extends java.util.Comparator<com.google.android.gms.common.api.Scope> {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.zzc>;
								public static reverseOrder(): java.util.Comparator<any>;
								public static naturalOrder(): java.util.Comparator<any>;
								public thenComparing(param0: java.util.Comparator<any>): java.util.Comparator<any>;
								public equals(param0: any): boolean;
								public static nullsFirst(param0: java.util.Comparator<any>): java.util.Comparator<any>;
								public thenComparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
								public thenComparingInt(param0: any /* any*/): java.util.Comparator<any>;
								public static comparingInt(param0: any /* any*/): java.util.Comparator<any>;
								public static nullsLast(param0: java.util.Comparator<any>): java.util.Comparator<any>;
								public static comparing(param0: any /* any*/): java.util.Comparator<any>;
								public thenComparing(param0: any /* any*/): java.util.Comparator<any>;
								public static comparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
								public static comparingDouble(param0: any /* any*/): java.util.Comparator<any>;
								public thenComparingDouble(param0: any /* any*/): java.util.Comparator<any>;
								public static comparingLong(param0: any /* any*/): java.util.Comparator<any>;
								public compare(param0: any, param1: any): number;
								public reversed(): java.util.Comparator<any>;
								public thenComparingLong(param0: any /* any*/): java.util.Comparator<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module auth {
					export module api {
						export module signin {
							export class zzd extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.signin.GoogleSignInOptions> {
								public static class: java.lang.Class<com.google.android.gms.auth.api.signin.zzd>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public newArray(param0: number): native.Array<any>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class AccountPicker extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.common.AccountPicker>;
						public static newChooseAccountIntent(param0: globalAndroid.accounts.Account, param1: java.util.ArrayList<globalAndroid.accounts.Account>, param2: native.Array<string>, param3: boolean, param4: string, param5: string, param6: native.Array<string>, param7: globalAndroid.os.Bundle): globalAndroid.content.Intent;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class ConnectionResult extends com.google.android.gms.common.internal.safeparcel.zza {
						public static class: java.lang.Class<com.google.android.gms.common.ConnectionResult>;
						public static SUCCESS: number;
						public static SERVICE_MISSING: number;
						public static SERVICE_VERSION_UPDATE_REQUIRED: number;
						public static SERVICE_DISABLED: number;
						public static SIGN_IN_REQUIRED: number;
						public static INVALID_ACCOUNT: number;
						public static RESOLUTION_REQUIRED: number;
						public static NETWORK_ERROR: number;
						public static INTERNAL_ERROR: number;
						public static SERVICE_INVALID: number;
						public static DEVELOPER_ERROR: number;
						public static LICENSE_CHECK_FAILED: number;
						public static CANCELED: number;
						public static TIMEOUT: number;
						public static INTERRUPTED: number;
						public static API_UNAVAILABLE: number;
						public static SIGN_IN_FAILED: number;
						public static SERVICE_UPDATING: number;
						public static SERVICE_MISSING_PERMISSION: number;
						public static RESTRICTED_PROFILE: number;
						public static DRIVE_EXTERNAL_STORAGE_REQUIRED: number;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.ConnectionResult>;
						public hasResolution(): boolean;
						public getErrorMessage(): string;
						public constructor();
						public getErrorCode(): number;
						public getResolution(): globalAndroid.app.PendingIntent;
						public isSuccess(): boolean;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public constructor(param0: number, param1: globalAndroid.app.PendingIntent);
						public constructor(param0: number);
						public startResolutionForResult(param0: globalAndroid.app.Activity, param1: number): void;
						public constructor(param0: number, param1: globalAndroid.app.PendingIntent, param2: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class ErrorDialogFragment extends globalAndroid.app.DialogFragment {
						public static class: java.lang.Class<com.google.android.gms.common.ErrorDialogFragment>;
						public show(param0: globalAndroid.app.FragmentManager, param1: string): void;
						public constructor();
						public onDismiss(param0: globalAndroid.content.DialogInterface): void;
						public static newInstance(param0: globalAndroid.app.Dialog): com.google.android.gms.common.ErrorDialogFragment;
						public onCancel(param0: globalAndroid.content.DialogInterface): void;
						public show(param0: globalAndroid.app.FragmentTransaction, param1: string): number;
						public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
						public onTrimMemory(param0: number): void;
						public onCreateContextMenu(param0: globalAndroid.view.ContextMenu, param1: globalAndroid.view.View, param2: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
						public static newInstance(param0: globalAndroid.app.Dialog, param1: globalAndroid.content.DialogInterface.OnCancelListener): com.google.android.gms.common.ErrorDialogFragment;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class GooglePlayServicesNotAvailableException extends java.lang.Exception {
						public static class: java.lang.Class<com.google.android.gms.common.GooglePlayServicesNotAvailableException>;
						public errorCode: number;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: number);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class GooglePlayServicesRepairableException extends com.google.android.gms.common.UserRecoverableException {
						public static class: java.lang.Class<com.google.android.gms.common.GooglePlayServicesRepairableException>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public getConnectionStatusCode(): number;
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
						public constructor(param0: number, param1: string, param2: globalAndroid.content.Intent);
						public constructor(param0: string, param1: globalAndroid.content.Intent);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class GooglePlayServicesUtil extends com.google.android.gms.common.zzo {
						public static class: java.lang.Class<com.google.android.gms.common.GooglePlayServicesUtil>;
						public static GMS_ERROR_DIALOG: string;
						public static GOOGLE_PLAY_SERVICES_VERSION_CODE: number;
						public static GOOGLE_PLAY_SERVICES_PACKAGE: string;
						public static GOOGLE_PLAY_STORE_PACKAGE: string;
						/** @deprecated */
						public static showErrorNotification(param0: number, param1: globalAndroid.content.Context): void;
						/** @deprecated */
						public static getOpenSourceSoftwareLicenseInfo(param0: globalAndroid.content.Context): string;
						public static getRemoteContext(param0: globalAndroid.content.Context): globalAndroid.content.Context;
						/** @deprecated */
						public static getErrorString(param0: number): string;
						public static getRemoteResource(param0: globalAndroid.content.Context): globalAndroid.content.res.Resources;
						/** @deprecated */
						public static showErrorDialogFragment(param0: number, param1: globalAndroid.app.Activity, param2: number, param3: globalAndroid.content.DialogInterface.OnCancelListener): boolean;
						/** @deprecated */
						public static getErrorPendingIntent(param0: number, param1: globalAndroid.content.Context, param2: number): globalAndroid.app.PendingIntent;
						/** @deprecated */
						public static isUserRecoverableError(param0: number): boolean;
						/** @deprecated */
						public static getErrorDialog(param0: number, param1: globalAndroid.app.Activity, param2: number, param3: globalAndroid.content.DialogInterface.OnCancelListener): globalAndroid.app.Dialog;
						/** @deprecated */
						public static showErrorDialogFragment(param0: number, param1: globalAndroid.app.Activity, param2: number): boolean;
						/** @deprecated */
						public static isGooglePlayServicesAvailable(param0: globalAndroid.content.Context): number;
						/** @deprecated */
						public static getErrorDialog(param0: number, param1: globalAndroid.app.Activity, param2: number): globalAndroid.app.Dialog;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class ProGuardCanary extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.common.ProGuardCanary>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class Scopes extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.common.Scopes>;
						public static PROFILE: string;
						public static EMAIL: string;
						public static PLUS_LOGIN: string;
						public static PLUS_ME: string;
						public static GAMES: string;
						public static CLOUD_SAVE: string;
						public static APP_STATE: string;
						public static DRIVE_FILE: string;
						public static DRIVE_APPFOLDER: string;
						public static FITNESS_ACTIVITY_READ: string;
						public static FITNESS_ACTIVITY_READ_WRITE: string;
						public static FITNESS_LOCATION_READ: string;
						public static FITNESS_LOCATION_READ_WRITE: string;
						public static FITNESS_BODY_READ: string;
						public static FITNESS_BODY_READ_WRITE: string;
						public static FITNESS_NUTRITION_READ: string;
						public static FITNESS_NUTRITION_READ_WRITE: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class SignInButton extends globalAndroid.widget.FrameLayout implements globalAndroid.view.View.OnClickListener {
						public static class: java.lang.Class<com.google.android.gms.common.SignInButton>;
						public static SIZE_STANDARD: number;
						public static SIZE_WIDE: number;
						public static SIZE_ICON_ONLY: number;
						public static COLOR_DARK: number;
						public static COLOR_LIGHT: number;
						public static COLOR_AUTO: number;
						public isLayoutRequested(): boolean;
						/** @deprecated */
						public setScopes(param0: native.Array<com.google.android.gms.common.api.Scope>): void;
						public canResolveLayoutDirection(): boolean;
						public constructor(param0: globalAndroid.content.Context);
						public sendAccessibilityEvent(param0: number): void;
						public onStartNestedScroll(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): boolean;
						public onNestedPrePerformAccessibilityAction(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.os.Bundle): boolean;
						public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public clearChildFocus(param0: globalAndroid.view.View): void;
						public requestChildFocus(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
						/** @deprecated */
						public invalidateChild(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect): void;
						public onNestedFling(param0: globalAndroid.view.View, param1: number, param2: number, param3: boolean): boolean;
						public childHasTransientStateChanged(param0: globalAndroid.view.View, param1: boolean): void;
						public isTextAlignmentResolved(): boolean;
						public addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
						public getTextDirection(): number;
						public showContextMenuForChild(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
						public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
						public onDescendantInvalidated(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
						public removeView(param0: globalAndroid.view.View): void;
						public getChildVisibleRect(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.Point): boolean;
						public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: native.Array<number>): void;
						public recomputeViewAttributes(param0: globalAndroid.view.View): void;
						public showContextMenuForChild(param0: globalAndroid.view.View): boolean;
						public canResolveTextDirection(): boolean;
						public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						/** @deprecated */
						public setStyle(param0: number, param1: number, param2: native.Array<com.google.android.gms.common.api.Scope>): void;
						public requestDisallowInterceptTouchEvent(param0: boolean): void;
						public isLayoutDirectionResolved(): boolean;
						public onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
						public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
						public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public requestLayout(): void;
						public notifySubtreeAccessibilityStateChanged(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
						public keyboardNavigationClusterSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
						public bringChildToFront(param0: globalAndroid.view.View): void;
						public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
						public addView(param0: globalAndroid.view.View, param1: number): void;
						public onClick(param0: globalAndroid.view.View): void;
						public requestChildRectangleOnScreen(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: boolean): boolean;
						public setSize(param0: number): void;
						public isTextDirectionResolved(): boolean;
						public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback, param2: number): globalAndroid.view.ActionMode;
						/** @deprecated */
						public requestFitSystemWindows(): void;
						public setStyle(param0: number, param1: number): void;
						public focusSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
						public onStopNestedScroll(param0: globalAndroid.view.View): void;
						public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public requestTransparentRegion(param0: globalAndroid.view.View): void;
						public setColorScheme(param0: number): void;
						public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
						public addView(param0: globalAndroid.view.View): void;
						public onNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
						public createContextMenu(param0: globalAndroid.view.ContextMenu): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public childDrawableStateChanged(param0: globalAndroid.view.View): void;
						public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
						public requestFitSystemWindows(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public updateViewLayout(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
						public getParentForAccessibility(): globalAndroid.view.ViewParent;
						public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						public focusableViewAvailable(param0: globalAndroid.view.View): void;
						public setEnabled(param0: boolean): void;
						public focusSearch(param0: number): globalAndroid.view.View;
						public requestSendAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
						public getTextAlignment(): number;
						public onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						/** @deprecated */
						public invalidateChildInParent(param0: native.Array<number>, param1: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
						public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
						public getParent(): globalAndroid.view.ViewParent;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
					}
					export module SignInButton {
						export class ButtonSize extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.google.android.gms.common.SignInButton.ButtonSize>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.SignInButton$ButtonSize interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								equals(param0: any): boolean;
								hashCode(): number;
								toString(): string;
								annotationType(): java.lang.Class<any>;
							});
							public constructor();
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export class ColorScheme extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.google.android.gms.common.SignInButton.ColorScheme>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.SignInButton$ColorScheme interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								equals(param0: any): boolean;
								hashCode(): number;
								toString(): string;
								annotationType(): java.lang.Class<any>;
							});
							public constructor();
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class SupportErrorDialogFragment {
						public static class: java.lang.Class<com.google.android.gms.common.SupportErrorDialogFragment>;
						public constructor();
						public onCancel(param0: globalAndroid.content.DialogInterface): void;
						public static newInstance(param0: globalAndroid.app.Dialog, param1: globalAndroid.content.DialogInterface.OnCancelListener): com.google.android.gms.common.SupportErrorDialogFragment;
						public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
						public static newInstance(param0: globalAndroid.app.Dialog): com.google.android.gms.common.SupportErrorDialogFragment;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class UserRecoverableException extends java.lang.Exception {
						public static class: java.lang.Class<com.google.android.gms.common.UserRecoverableException>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public getIntent(): globalAndroid.content.Intent;
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
						public constructor(param0: string, param1: globalAndroid.content.Intent);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module annotation {
						export class KeepForSdk extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.google.android.gms.common.annotation.KeepForSdk>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.annotation.KeepForSdk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								equals(param0: any): boolean;
								hashCode(): number;
								toString(): string;
								annotationType(): java.lang.Class<any>;
							});
							public constructor();
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module annotation {
						export class KeepForSdkWithFieldsAndMethods extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.google.android.gms.common.annotation.KeepForSdkWithFieldsAndMethods>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.annotation.KeepForSdkWithFieldsAndMethods interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								equals(param0: any): boolean;
								hashCode(): number;
								toString(): string;
								annotationType(): java.lang.Class<any>;
							});
							public constructor();
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module annotation {
						export class KeepForSdkWithMembers extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.google.android.gms.common.annotation.KeepForSdkWithMembers>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.annotation.KeepForSdkWithMembers interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								equals(param0: any): boolean;
								hashCode(): number;
								toString(): string;
								annotationType(): java.lang.Class<any>;
							});
							public constructor();
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module annotation {
						export class KeepName extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.google.android.gms.common.annotation.KeepName>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.annotation.KeepName interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								equals(param0: any): boolean;
								hashCode(): number;
								toString(): string;
								annotationType(): java.lang.Class<any>;
							});
							public constructor();
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class Api<O>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.Api<any>>;
							public constructor(param0: string, param1: any /* com.google.android.gms.common.api.Api.zza<any,any>*/, param2: any /* com.google.android.gms.common.api.Api.zzf<any>*/);
							public getName(): string;
						}
						export module Api {
							export class ApiOptions extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
							}
							export module ApiOptions {
								export class HasOptions extends java.lang.Object implements com.google.android.gms.common.api.Api.ApiOptions {
									public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions.HasOptions>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions$HasOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
									});
									public constructor();
								}
								export class NoOptions extends java.lang.Object implements com.google.android.gms.common.api.Api.ApiOptions.NotRequiredOptions {
									public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions.NoOptions>;
								}
								export class NotRequiredOptions extends java.lang.Object implements com.google.android.gms.common.api.Api.ApiOptions {
									public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions.NotRequiredOptions>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions$NotRequiredOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
									});
									public constructor();
								}
								export class Optional extends java.lang.Object implements com.google.android.gms.common.api.Api.ApiOptions.HasOptions, com.google.android.gms.common.api.Api.ApiOptions.NotRequiredOptions {
									public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions.Optional>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions$Optional interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
									});
									public constructor();
								}
							}
							export abstract class zza<T, O>  extends java.lang.Object /* com.google.android.gms.common.api.Api.zzd<any,any>*/ {
								public static class: java.lang.Class<com.google.android.gms.common.api.Api.zza<any,any>>;
								public constructor();
							}
							export class zzb extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.Api.zzb>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.Api$zzb interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
							}
							export class zzc<C>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.Api.zzc<any>>;
								public constructor();
							}
							export class zzd<T, O>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.Api.zzd<any,any>>;
								public getPriority(): number;
								public constructor();
							}
							export class zze extends java.lang.Object implements com.google.android.gms.common.api.Api.zzb {
								public static class: java.lang.Class<com.google.android.gms.common.api.Api.zze>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.Api$zze interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zza(param0: any /* com.google.android.gms.common.internal.zzj*/): void;
									disconnect(): void;
									isConnected(): boolean;
									isConnecting(): boolean;
									zza(param0: any /* com.google.android.gms.common.internal.zzal*/, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
									zzmv(): boolean;
									zzpe(): boolean;
									zzmG(): boolean;
									zzmH(): globalAndroid.content.Intent;
									dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
								});
								public constructor();
								public isConnected(): boolean;
								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
								public disconnect(): void;
								public isConnecting(): boolean;
							}
							export class zzf<C>  extends java.lang.Object /* com.google.android.gms.common.api.Api.zzc<any>*/ {
								public static class: java.lang.Class<com.google.android.gms.common.api.Api.zzf<any>>;
								public constructor();
							}
							export class zzg<T>  extends java.lang.Object /* com.google.android.gms.common.api.Api.zzb*/ {
								public static class: java.lang.Class<com.google.android.gms.common.api.Api.zzg<any>>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.Api$zzg interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zzdb(): string;
									zzdc(): string;
									zzd(param0: globalAndroid.os.IBinder): any;
								});
								public constructor();
							}
							export class zzh<T, O>  extends java.lang.Object /* com.google.android.gms.common.api.Api.zzd<any,any>*/ {
								public static class: java.lang.Class<com.google.android.gms.common.api.Api.zzh<any,any>>;
							}
							export class zzi<C>  extends java.lang.Object /* com.google.android.gms.common.api.Api.zzc<any>*/ {
								public static class: java.lang.Class<com.google.android.gms.common.api.Api.zzi<any>>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class ApiException extends java.lang.Exception {
							public static class: java.lang.Class<com.google.android.gms.common.api.ApiException>;
							public mStatus: com.google.android.gms.common.api.Status;
							public constructor();
							public getStatusCode(): number;
							public getStatusMessage(): string;
							public constructor(param0: string);
							public constructor(param0: java.lang.Throwable);
							public constructor(param0: com.google.android.gms.common.api.Status);
							public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
							public constructor(param0: string, param1: java.lang.Throwable);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class Batch extends com.google.android.gms.internal.zzbbe<com.google.android.gms.common.api.BatchResult> {
							public static class: java.lang.Class<com.google.android.gms.common.api.Batch>;
							public cancel(): void;
							public createFailedResult(param0: com.google.android.gms.common.api.Status): com.google.android.gms.common.api.BatchResult;
						}
						export module Batch {
							export class Builder extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.Batch.Builder>;
								public build(): com.google.android.gms.common.api.Batch;
								public add(param0: com.google.android.gms.common.api.PendingResult<any>): com.google.android.gms.common.api.BatchResultToken<any>;
								public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class BatchResult extends java.lang.Object implements com.google.android.gms.common.api.Result {
							public static class: java.lang.Class<com.google.android.gms.common.api.BatchResult>;
							public getStatus(): com.google.android.gms.common.api.Status;
							public take(param0: com.google.android.gms.common.api.BatchResultToken<any>): com.google.android.gms.common.api.Result;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class BatchResultToken<R>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.BatchResultToken<any>>;
							public mId: number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class BooleanResult extends java.lang.Object implements com.google.android.gms.common.api.Result {
							public static class: java.lang.Class<com.google.android.gms.common.api.BooleanResult>;
							public constructor(param0: com.google.android.gms.common.api.Status, param1: boolean);
							public getStatus(): com.google.android.gms.common.api.Status;
							public hashCode(): number;
							public getValue(): boolean;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class CommonStatusCodes extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.CommonStatusCodes>;
							public static SUCCESS_CACHE: number;
							public static SUCCESS: number;
							public static SERVICE_VERSION_UPDATE_REQUIRED: number;
							public static SERVICE_DISABLED: number;
							public static SIGN_IN_REQUIRED: number;
							public static INVALID_ACCOUNT: number;
							public static RESOLUTION_REQUIRED: number;
							public static NETWORK_ERROR: number;
							public static INTERNAL_ERROR: number;
							public static DEVELOPER_ERROR: number;
							public static ERROR: number;
							public static INTERRUPTED: number;
							public static TIMEOUT: number;
							public static CANCELED: number;
							public static API_NOT_CONNECTED: number;
							public static DEAD_CLIENT: number;
							public constructor();
							public static getStatusCodeString(param0: number): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class GoogleApi<O>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApi<any>>;
							/** @deprecated */
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<O>, param2: O, param3: any /* com.google.android.gms.internal.zzbem*/);
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<O>, param2: O, param3: any /* com.google.android.gms.common.api.GoogleApi.zza*/);
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<O>, param2: globalAndroid.os.Looper);
							public getApplicationContext(): globalAndroid.content.Context;
							/** @deprecated */
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<O>, param2: O, param3: globalAndroid.os.Looper, param4: any /* com.google.android.gms.internal.zzbem*/);
							/** @deprecated */
							public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<O>, param2: O, param3: any /* com.google.android.gms.internal.zzbem*/);
							public getLooper(): globalAndroid.os.Looper;
							public getInstanceId(): number;
						}
						export module GoogleApi {
							export class zza extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApi.zza>;
								public account: globalAndroid.accounts.Account;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class GoogleApiActivity extends globalAndroid.app.Activity implements globalAndroid.content.DialogInterface.OnCancelListener {
							public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApiActivity>;
							public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
							public onWindowStartingActionMode(param0: globalAndroid.view.ActionMode.Callback, param1: number): globalAndroid.view.ActionMode;
							public onTrimMemory(param0: number): void;
							public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
							public onPreparePanel(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.Menu): boolean;
							public onCreate(param0: globalAndroid.os.Bundle, param1: any): void;
							public dispatchTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
							public onCreatePanelMenu(param0: number, param1: globalAndroid.view.Menu): boolean;
							public onWindowStartingActionMode(param0: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
							public dispatchKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
							public onWindowFocusChanged(param0: boolean): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public dispatchTrackballEvent(param0: globalAndroid.view.MotionEvent): boolean;
							public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
							public onAttachedToWindow(): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle, param1: any): void;
							public onMenuOpened(param0: number, param1: globalAndroid.view.Menu): boolean;
							public onMenuItemSelected(param0: number, param1: globalAndroid.view.MenuItem): boolean;
							public onSearchRequested(): boolean;
							public constructor();
							public onWindowAttributesChanged(param0: globalAndroid.view.WindowManager.LayoutParams): void;
							public onPointerCaptureChanged(param0: boolean): void;
							public onDetachedFromWindow(): void;
							public onCreateView(param0: globalAndroid.view.View, param1: string, param2: globalAndroid.content.Context, param3: globalAndroid.util.AttributeSet): globalAndroid.view.View;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public onContentChanged(): void;
							public onCancel(param0: globalAndroid.content.DialogInterface): void;
							public onCreateView(param0: string, param1: globalAndroid.content.Context, param2: globalAndroid.util.AttributeSet): globalAndroid.view.View;
							public onActionModeFinished(param0: globalAndroid.view.ActionMode): void;
							public constructor(param0: globalAndroid.content.Context, param1: number);
							public onProvideKeyboardShortcuts(param0: java.util.List<any>, param1: globalAndroid.view.Menu, param2: number): void;
							public dispatchKeyShortcutEvent(param0: globalAndroid.view.KeyEvent): boolean;
							public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
							public dispatchPopulateAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
							public onActionModeStarted(param0: globalAndroid.view.ActionMode): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.content.res.Resources.Theme);
							public onPanelClosed(param0: number, param1: globalAndroid.view.Menu): void;
							public onCreatePanelView(param0: number): globalAndroid.view.View;
							public onCreateContextMenu(param0: globalAndroid.view.ContextMenu, param1: globalAndroid.view.View, param2: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
							public dispatchGenericMotionEvent(param0: globalAndroid.view.MotionEvent): boolean;
							public constructor(param0: globalAndroid.content.Context);
							public onSearchRequested(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export abstract class GoogleApiClient extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApiClient>;
							public static SIGN_IN_MODE_REQUIRED: number;
							public static SIGN_IN_MODE_OPTIONAL: number;
							public constructor();
							public isConnectionCallbacksRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): boolean;
							public getContext(): globalAndroid.content.Context;
							public isConnectionFailedListenerRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): boolean;
							public static dumpAll(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
							public disconnect(): void;
							public isConnected(): boolean;
							public registerConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
							public unregisterConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
							public reconnect(): void;
							public registerConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
							public getLooper(): globalAndroid.os.Looper;
							public unregisterConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
							public getConnectionResult(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
							public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
							public isConnecting(): boolean;
							public hasConnectedApi(param0: com.google.android.gms.common.api.Api<any>): boolean;
							public blockingConnect(): com.google.android.gms.common.ConnectionResult;
							public connect(): void;
							public blockingConnect(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
							public clearDefaultAccountAndReconnect(): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public connect(param0: number): void;
						}
						export module GoogleApiClient {
							export class Builder extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApiClient.Builder>;
								public build(): com.google.android.gms.common.api.GoogleApiClient;
								public useDefaultAccount(): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public addConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public addScope(param0: com.google.android.gms.common.api.Scope): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public addOnConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public setViewForPopups(param0: globalAndroid.view.View): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public setHandler(param0: globalAndroid.os.Handler): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public addApiIfAvailable(param0: com.google.android.gms.common.api.Api<any>, param1: native.Array<com.google.android.gms.common.api.Scope>): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public constructor(param0: globalAndroid.content.Context);
								public addApi(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public addApi(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.Api.ApiOptions.HasOptions): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public addApiIfAvailable(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.Api.ApiOptions.HasOptions, param2: native.Array<com.google.android.gms.common.api.Scope>): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public setGravityForPopups(param0: number): com.google.android.gms.common.api.GoogleApiClient.Builder;
								public setAccountName(param0: string): com.google.android.gms.common.api.GoogleApiClient.Builder;
							}
							export class ConnectionCallbacks extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.GoogleApiClient$ConnectionCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onConnected(param0: globalAndroid.os.Bundle): void;
									onConnectionSuspended(param0: number): void;
								});
								public constructor();
								public static CAUSE_SERVICE_DISCONNECTED: number;
								public static CAUSE_NETWORK_LOST: number;
								public onConnected(param0: globalAndroid.os.Bundle): void;
								public onConnectionSuspended(param0: number): void;
							}
							export class OnConnectionFailedListener extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.GoogleApiClient$OnConnectionFailedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
								});
								public constructor();
								public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export abstract class OptionalPendingResult<R>  extends com.google.android.gms.common.api.PendingResult<any> {
							public static class: java.lang.Class<com.google.android.gms.common.api.OptionalPendingResult<any>>;
							public constructor();
							public get(): any;
							public isDone(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export abstract class PendingResult<R>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.PendingResult<any>>;
							public constructor();
							public cancel(): void;
							public isCanceled(): boolean;
							public await(param0: number, param1: java.util.concurrent.TimeUnit): R;
							public await(): R;
							public then(param0: com.google.android.gms.common.api.ResultTransform<any,any>): com.google.android.gms.common.api.TransformedResult<any>;
							public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>, param1: number, param2: java.util.concurrent.TimeUnit): void;
							public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>): void;
						}
						export module PendingResult {
							export class zza extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.api.PendingResult.zza>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.PendingResult$zza interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zzo(param0: com.google.android.gms.common.api.Status): void;
								});
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class PendingResults extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.PendingResults>;
							public static immediatePendingResult(param0: com.google.android.gms.common.api.Status): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
							public static canceledPendingResult(param0: com.google.android.gms.common.api.Result): com.google.android.gms.common.api.PendingResult<any>;
							public static immediatePendingResult(param0: com.google.android.gms.common.api.Result): com.google.android.gms.common.api.OptionalPendingResult<any>;
							public static canceledPendingResult(): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						}
						export module PendingResults {
							export class zza<R>  extends java.lang.Object /* com.google.android.gms.internal.zzbbe<any>*/ {
								public static class: java.lang.Class<com.google.android.gms.common.api.PendingResults.zza<any>>;
								public constructor(param0: any);
								public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
								public constructor();
								/** @deprecated */
								public constructor(param0: globalAndroid.os.Looper);
							}
							export class zzb<R>  extends java.lang.Object /* com.google.android.gms.internal.zzbbe<any>*/ {
								public static class: java.lang.Class<com.google.android.gms.common.api.PendingResults.zzb<any>>;
								public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
								public constructor(param0: com.google.android.gms.common.api.GoogleApiClient, param1: any);
								public constructor();
								/** @deprecated */
								public constructor(param0: globalAndroid.os.Looper);
							}
							export class zzc<R>  extends java.lang.Object /* com.google.android.gms.internal.zzbbe<any>*/ {
								public static class: java.lang.Class<com.google.android.gms.common.api.PendingResults.zzc<any>>;
								public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
								public constructor();
								/** @deprecated */
								public constructor(param0: globalAndroid.os.Looper);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class Releasable extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.Releasable>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.api.Releasable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								release(): void;
							});
							public constructor();
							public release(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class ResolvableApiException extends com.google.android.gms.common.api.ApiException {
							public static class: java.lang.Class<com.google.android.gms.common.api.ResolvableApiException>;
							public constructor();
							public constructor(param0: string);
							public constructor(param0: java.lang.Throwable);
							public constructor(param0: com.google.android.gms.common.api.Status);
							public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
							public startResolutionForResult(param0: globalAndroid.app.Activity, param1: number): void;
							public getResolution(): globalAndroid.app.PendingIntent;
							public constructor(param0: string, param1: java.lang.Throwable);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export abstract class ResolvingResultCallbacks<R>  extends com.google.android.gms.common.api.ResultCallbacks<any> {
							public static class: java.lang.Class<com.google.android.gms.common.api.ResolvingResultCallbacks<any>>;
							public constructor();
							public onSuccess(param0: any): void;
							public constructor(param0: globalAndroid.app.Activity, param1: number);
							public onUnresolvableFailure(param0: com.google.android.gms.common.api.Status): void;
							public onResult(param0: any): void;
							public onFailure(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class Response<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.Response<any>>;
							public constructor();
							public getResult(): T;
							public constructor(param0: T);
							public setResult(param0: T): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class Result extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.Result>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.api.Result interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getStatus(): com.google.android.gms.common.api.Status;
							});
							public constructor();
							public getStatus(): com.google.android.gms.common.api.Status;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class ResultCallback<R>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.ResultCallback<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.api.ResultCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onResult(param0: R): void;
							});
							public constructor();
							public onResult(param0: R): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export abstract class ResultCallbacks<R>  extends com.google.android.gms.common.api.ResultCallback<any> {
							public static class: java.lang.Class<com.google.android.gms.common.api.ResultCallbacks<any>>;
							public constructor();
							public onSuccess(param0: any): void;
							public onResult(param0: any): void;
							public onFailure(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export abstract class ResultTransform<R, S>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.ResultTransform<any,any>>;
							public constructor();
							public onSuccess(param0: R): com.google.android.gms.common.api.PendingResult<S>;
							public createFailedResult(param0: com.google.android.gms.common.api.Status): com.google.android.gms.common.api.PendingResult<S>;
							public onFailure(param0: com.google.android.gms.common.api.Status): com.google.android.gms.common.api.Status;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class Scope extends com.google.android.gms.common.internal.safeparcel.zza implements com.google.android.gms.common.internal.ReflectedParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.api.Scope>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.api.Scope>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: string);
							public describeContents(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class Status extends com.google.android.gms.common.internal.safeparcel.zza implements com.google.android.gms.common.api.Result, com.google.android.gms.common.internal.ReflectedParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.api.Status>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.api.Status>;
							public constructor();
							public hasResolution(): boolean;
							public getStatus(): com.google.android.gms.common.api.Status;
							public isInterrupted(): boolean;
							public hashCode(): number;
							public toString(): string;
							public getResolution(): globalAndroid.app.PendingIntent;
							public constructor(param0: number);
							public isCanceled(): boolean;
							public getStatusCode(): number;
							public getStatusMessage(): string;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public describeContents(): number;
							public constructor(param0: number, param1: string, param2: globalAndroid.app.PendingIntent);
							public startResolutionForResult(param0: globalAndroid.app.Activity, param1: number): void;
							public equals(param0: any): boolean;
							public isSuccess(): boolean;
							public constructor(param0: number, param1: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export abstract class TransformedResult<R>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.TransformedResult<any>>;
							public constructor();
							public then(param0: com.google.android.gms.common.api.ResultTransform<any,any>): com.google.android.gms.common.api.TransformedResult<any>;
							public andFinally(param0: com.google.android.gms.common.api.ResultCallbacks<any>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class zzb extends java.lang.Object implements com.google.android.gms.common.api.PendingResult.zza {
							public static class: java.lang.Class<com.google.android.gms.common.api.zzb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class zzc extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.zzc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class zzd extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.zzd>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class zze extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.api.Scope> {
							public static class: java.lang.Class<com.google.android.gms.common.api.zze>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class zzf extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.api.Status> {
							public static class: java.lang.Class<com.google.android.gms.common.api.zzf>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export abstract class AbstractDataBuffer<T>  extends com.google.android.gms.common.data.DataBuffer<any> {
							public static class: java.lang.Class<com.google.android.gms.common.data.AbstractDataBuffer<any>>;
							public singleRefIterator(): java.util.Iterator<any>;
							public iterator(): java.util.Iterator<any>;
							public spliterator(): java.util.Spliterator<any>;
							/** @deprecated */
							public close(): void;
							public get(param0: number): any;
							public forEach(param0: any /* any*/): void;
							public release(): void;
							/** @deprecated */
							public isClosed(): boolean;
							public constructor(param0: com.google.android.gms.common.data.DataHolder);
							public getCount(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class BitmapTeleporter extends com.google.android.gms.common.internal.safeparcel.zza implements com.google.android.gms.common.internal.ReflectedParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.data.BitmapTeleporter>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.data.BitmapTeleporter>;
							public constructor();
							public constructor(param0: globalAndroid.graphics.Bitmap);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public describeContents(): number;
							public release(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class DataBuffer<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.data.DataBuffer<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.data.DataBuffer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getCount(): number;
								get(param0: number): T;
								zzqN(): globalAndroid.os.Bundle;
								close(): void;
								isClosed(): boolean;
								iterator(): java.util.Iterator<T>;
								singleRefIterator(): java.util.Iterator<T>;
								release(): void;
								release(): void;
								iterator(): java.util.Iterator<T>;
								forEach(param0: any /* any*/): void;
								spliterator(): java.util.Spliterator<T>;
							});
							public constructor();
							public get(param0: number): T;
							public spliterator(): java.util.Spliterator<T>;
							/** @deprecated */
							public close(): void;
							public forEach(param0: any /* any*/): void;
							public release(): void;
							/** @deprecated */
							public isClosed(): boolean;
							public singleRefIterator(): java.util.Iterator<T>;
							public getCount(): number;
							public iterator(): java.util.Iterator<T>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class DataBufferObserver extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferObserver>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.data.DataBufferObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onDataChanged(): void;
								onDataRangeChanged(param0: number, param1: number): void;
								onDataRangeInserted(param0: number, param1: number): void;
								onDataRangeRemoved(param0: number, param1: number): void;
								onDataRangeMoved(param0: number, param1: number, param2: number): void;
							});
							public constructor();
							public onDataRangeInserted(param0: number, param1: number): void;
							public onDataChanged(): void;
							public onDataRangeChanged(param0: number, param1: number): void;
							public onDataRangeRemoved(param0: number, param1: number): void;
							public onDataRangeMoved(param0: number, param1: number, param2: number): void;
						}
						export module DataBufferObserver {
							export class Observable extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferObserver.Observable>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.data.DataBufferObserver$Observable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									addObserver(param0: com.google.android.gms.common.data.DataBufferObserver): void;
									removeObserver(param0: com.google.android.gms.common.data.DataBufferObserver): void;
								});
								public constructor();
								public removeObserver(param0: com.google.android.gms.common.data.DataBufferObserver): void;
								public addObserver(param0: com.google.android.gms.common.data.DataBufferObserver): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class DataBufferObserverSet extends java.lang.Object implements com.google.android.gms.common.data.DataBufferObserver, com.google.android.gms.common.data.DataBufferObserver.Observable {
							public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferObserverSet>;
							public constructor();
							public addObserver(param0: com.google.android.gms.common.data.DataBufferObserver): void;
							public removeObserver(param0: com.google.android.gms.common.data.DataBufferObserver): void;
							public hasObservers(): boolean;
							public onDataRangeInserted(param0: number, param1: number): void;
							public clear(): void;
							public onDataChanged(): void;
							public onDataRangeChanged(param0: number, param1: number): void;
							public onDataRangeRemoved(param0: number, param1: number): void;
							public onDataRangeMoved(param0: number, param1: number, param2: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class DataBufferUtils extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferUtils>;
							public static freezeAndClose(param0: com.google.android.gms.common.data.DataBuffer<any>): java.util.ArrayList<any>;
							public static hasData(param0: com.google.android.gms.common.data.DataBuffer<any>): boolean;
							public static hasPrevPage(param0: com.google.android.gms.common.data.DataBuffer<any>): boolean;
							public static hasNextPage(param0: com.google.android.gms.common.data.DataBuffer<any>): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class DataHolder extends com.google.android.gms.common.internal.safeparcel.zza implements java.io.Closeable {
							public static class: java.lang.Class<com.google.android.gms.common.data.DataHolder>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.data.DataHolder>;
							public getStatusCode(): number;
							public close(): void;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public finalize(): void;
							public isClosed(): boolean;
							public getCount(): number;
						}
						export module DataHolder {
							export class zza extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.data.DataHolder.zza>;
							}
							export class zzb extends java.lang.RuntimeException {
								public static class: java.lang.Class<com.google.android.gms.common.data.DataHolder.zzb>;
								public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
								public constructor(param0: java.lang.Throwable);
								public constructor(param0: string, param1: java.lang.Throwable);
								public constructor();
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class Freezable<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.data.Freezable<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.data.Freezable<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								freeze(): T;
								isDataValid(): boolean;
							});
							public constructor();
							public isDataValid(): boolean;
							public freeze(): T;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class FreezableUtils extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.data.FreezableUtils>;
							public constructor();
							public static freezeIterable(param0: java.lang.Iterable<any>): java.util.ArrayList<any>;
							public static freeze(param0: java.util.ArrayList<any>): java.util.ArrayList<any>;
							public static freeze(param0: native.Array<com.google.android.gms.common.data.Freezable<any>>): java.util.ArrayList<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class zza extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.data.BitmapTeleporter> {
							public static class: java.lang.Class<com.google.android.gms.common.data.zza>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class zzb<T>  extends java.util.Iterator<any> {
							public static class: java.lang.Class<com.google.android.gms.common.data.zzb<any>>;
							public constructor(param0: com.google.android.gms.common.data.DataBuffer<any>);
							public hasNext(): boolean;
							public remove(): void;
							public next(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class zzc extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.data.zzc>;
							public getInteger(param0: string): number;
							public isDataValid(): boolean;
							public hashCode(): number;
							public getLong(param0: string): number;
							public getFloat(param0: string): number;
							public getString(param0: string): string;
							public getByteArray(param0: string): native.Array<number>;
							public constructor(param0: com.google.android.gms.common.data.DataHolder, param1: number);
							public equals(param0: any): boolean;
							public getBoolean(param0: string): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class zzd<T>  extends com.google.android.gms.common.data.AbstractDataBuffer<any> {
							public static class: java.lang.Class<com.google.android.gms.common.data.zzd<any>>;
							public singleRefIterator(): java.util.Iterator<any>;
							public constructor(param0: com.google.android.gms.common.data.DataHolder, param1: globalAndroid.os.Parcelable.Creator<any>);
							public iterator(): java.util.Iterator<any>;
							/** @deprecated */
							public close(): void;
							public get(param0: number): any;
							public release(): void;
							/** @deprecated */
							public isClosed(): boolean;
							public constructor(param0: com.google.android.gms.common.data.DataHolder);
							public getCount(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class zze extends com.google.android.gms.common.data.DataHolder.zza {
							public static class: java.lang.Class<com.google.android.gms.common.data.zze>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class zzf extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.data.DataHolder> {
							public static class: java.lang.Class<com.google.android.gms.common.data.zzf>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export abstract class zzg<T>  extends com.google.android.gms.common.data.AbstractDataBuffer<any> {
							public static class: java.lang.Class<com.google.android.gms.common.data.zzg<any>>;
							public singleRefIterator(): java.util.Iterator<any>;
							public iterator(): java.util.Iterator<any>;
							/** @deprecated */
							public close(): void;
							public get(param0: number): any;
							public release(): void;
							/** @deprecated */
							public isClosed(): boolean;
							public constructor(param0: com.google.android.gms.common.data.DataHolder);
							public getCount(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module data {
						export class zzh<T>  extends java.lang.Object /* com.google.android.gms.common.data.zzb<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.common.data.zzh<any>>;
							public constructor(param0: com.google.android.gms.common.data.DataBuffer<any>);
							public next(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module images {
						export class ImageManager extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.images.ImageManager>;
							public loadImage(param0: globalAndroid.widget.ImageView, param1: globalAndroid.net.Uri): void;
							public loadImage(param0: com.google.android.gms.common.images.ImageManager.OnImageLoadedListener, param1: globalAndroid.net.Uri, param2: number): void;
							public loadImage(param0: globalAndroid.widget.ImageView, param1: number): void;
							public loadImage(param0: com.google.android.gms.common.images.ImageManager.OnImageLoadedListener, param1: globalAndroid.net.Uri): void;
							public loadImage(param0: globalAndroid.widget.ImageView, param1: globalAndroid.net.Uri, param2: number): void;
							public static create(param0: globalAndroid.content.Context): com.google.android.gms.common.images.ImageManager;
						}
						export module ImageManager {
							export class ImageReceiver extends globalAndroid.os.ResultReceiver {
								public static class: java.lang.Class<com.google.android.gms.common.images.ImageManager.ImageReceiver>;
								public describeContents(): number;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public onReceiveResult(param0: number, param1: globalAndroid.os.Bundle): void;
							}
							export class OnImageLoadedListener extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.images.ImageManager.OnImageLoadedListener>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.images.ImageManager$OnImageLoadedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onImageLoaded(param0: globalAndroid.net.Uri, param1: globalAndroid.graphics.drawable.Drawable, param2: boolean): void;
								});
								public constructor();
								public onImageLoaded(param0: globalAndroid.net.Uri, param1: globalAndroid.graphics.drawable.Drawable, param2: boolean): void;
							}
							export class zzb extends java.lang.Object implements java.lang.Runnable {
								public static class: java.lang.Class<com.google.android.gms.common.images.ImageManager.zzb>;
								public constructor(param0: com.google.android.gms.common.images.ImageManager, param1: globalAndroid.net.Uri, param2: globalAndroid.os.ParcelFileDescriptor);
								public run(): void;
							}
							export class zzc extends java.lang.Object implements java.lang.Runnable {
								public static class: java.lang.Class<com.google.android.gms.common.images.ImageManager.zzc>;
								public constructor(param0: com.google.android.gms.common.images.ImageManager, param1: any /* com.google.android.gms.common.images.zza*/);
								public run(): void;
							}
							export class zzd extends java.lang.Object implements java.lang.Runnable {
								public static class: java.lang.Class<com.google.android.gms.common.images.ImageManager.zzd>;
								public constructor(param0: com.google.android.gms.common.images.ImageManager, param1: globalAndroid.net.Uri, param2: globalAndroid.graphics.Bitmap, param3: boolean, param4: java.util.concurrent.CountDownLatch);
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module images {
						export class Size extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.images.Size>;
							public getWidth(): number;
							public getHeight(): number;
							public constructor(param0: number, param1: number);
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public static parseSize(param0: string): com.google.android.gms.common.images.Size;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module images {
						export class WebImage extends com.google.android.gms.common.internal.safeparcel.zza {
							public static class: java.lang.Class<com.google.android.gms.common.images.WebImage>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.images.WebImage>;
							public constructor();
							public getWidth(): number;
							public getHeight(): number;
							public constructor(param0: globalAndroid.net.Uri);
							public getUrl(): globalAndroid.net.Uri;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: globalAndroid.net.Uri, param1: number, param2: number);
							public constructor(param0: org.json.JSONObject);
							public hashCode(): number;
							public toJson(): org.json.JSONObject;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module images {
						export abstract class zza extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.images.zza>;
							public constructor(param0: globalAndroid.net.Uri, param1: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module images {
						export class zzb extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.images.zzb>;
							public uri: globalAndroid.net.Uri;
							public constructor(param0: globalAndroid.net.Uri);
							public hashCode(): number;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module images {
						export class zzc extends com.google.android.gms.common.images.zza {
							public static class: java.lang.Class<com.google.android.gms.common.images.zzc>;
							public constructor(param0: globalAndroid.widget.ImageView, param1: globalAndroid.net.Uri);
							public hashCode(): number;
							public constructor(param0: globalAndroid.net.Uri, param1: number);
							public equals(param0: any): boolean;
							public constructor(param0: globalAndroid.widget.ImageView, param1: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module images {
						export class zzd extends com.google.android.gms.common.images.zza {
							public static class: java.lang.Class<com.google.android.gms.common.images.zzd>;
							public hashCode(): number;
							public constructor(param0: globalAndroid.net.Uri, param1: number);
							public equals(param0: any): boolean;
							public constructor(param0: com.google.android.gms.common.images.ImageManager.OnImageLoadedListener, param1: globalAndroid.net.Uri);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module images {
						export class zze extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.images.WebImage> {
							public static class: java.lang.Class<com.google.android.gms.common.images.zze>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class BinderWrapper extends java.lang.Object implements globalAndroid.os.Parcelable {
							public static class: java.lang.Class<com.google.android.gms.common.internal.BinderWrapper>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.BinderWrapper>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public describeContents(): number;
							public constructor(param0: globalAndroid.os.IBinder);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export abstract class DowngradeableSafeParcel extends com.google.android.gms.common.internal.safeparcel.zza implements com.google.android.gms.common.internal.ReflectedParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.internal.DowngradeableSafeParcel>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public describeContents(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class ReflectedParcelable extends java.lang.Object implements globalAndroid.os.Parcelable {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ReflectedParcelable>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.ReflectedParcelable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								describeContents(): number;
								writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							});
							public constructor();
							public static PARCELABLE_WRITE_RETURN_VALUE: number;
							public static CONTENTS_FILE_DESCRIPTOR: number;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public describeContents(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module safeparcel {
							export class SafeParcelable extends java.lang.Object implements globalAndroid.os.Parcelable {
								public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									describeContents(): number;
									writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								});
								public constructor();
								public static PARCELABLE_WRITE_RETURN_VALUE: number;
								public static NULL: string;
								public static CONTENTS_FILE_DESCRIPTOR: number;
								public describeContents(): number;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module safeparcel {
							export abstract class zza extends java.lang.Object implements com.google.android.gms.common.internal.safeparcel.SafeParcelable {
								public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.zza>;
								public describeContents(): number;
								public constructor();
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module safeparcel {
							export class zzb extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.zzb>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module safeparcel {
							export class zzc extends java.lang.RuntimeException {
								public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.zzc>;
								public constructor(param0: string, param1: globalAndroid.os.Parcel);
								public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
								public constructor(param0: java.lang.Throwable);
								public constructor(param0: string, param1: java.lang.Throwable);
								public constructor();
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module safeparcel {
							export class zzd extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.zzd>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module safeparcel {
							export class zze extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.zze>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zza extends com.google.android.gms.common.internal.zzam {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zza>;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public pingBinder(): boolean;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public getAccount(): globalAndroid.accounts.Account;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public equals(param0: any): boolean;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzaa extends java.lang.Object implements com.google.android.gms.common.internal.zzf {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzaa>;
							public onConnected(param0: globalAndroid.os.Bundle): void;
							public onConnectionSuspended(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzab extends java.lang.Object implements com.google.android.gms.common.internal.zzg {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzab>;
							public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzac extends java.lang.Object implements globalAndroid.os.Handler.Callback {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzac>;
							public constructor(param0: globalAndroid.os.Looper, param1: any /* com.google.android.gms.common.internal.zzad*/);
							public isConnectionCallbacksRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): boolean;
							public isConnectionFailedListenerRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): boolean;
							public registerConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
							public unregisterConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
							public registerConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
							public handleMessage(param0: globalAndroid.os.Message): boolean;
							public unregisterConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzad extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzad>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.zzad interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								isConnected(): boolean;
								zzoC(): globalAndroid.os.Bundle;
							});
							public constructor();
							public isConnected(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export abstract class zzae extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzae>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzaf extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzaf>;
							public hashCode(): number;
							public constructor(param0: string, param1: string);
							public getComponentName(): globalAndroid.content.ComponentName;
							public constructor(param0: globalAndroid.content.ComponentName);
							public toString(): string;
							public getPackage(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzag extends com.google.android.gms.common.internal.zzae implements globalAndroid.os.Handler.Callback {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzag>;
							public handleMessage(param0: globalAndroid.os.Message): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzah extends java.lang.Object implements globalAndroid.content.ServiceConnection {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzah>;
							public isBound(): boolean;
							public constructor(param0: any /* com.google.android.gms.common.internal.zzag*/, param1: any /* com.google.android.gms.common.internal.zzaf*/);
							public getBinder(): globalAndroid.os.IBinder;
							public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
							public getState(): number;
							public getComponentName(): globalAndroid.content.ComponentName;
							public onBindingDied(param0: globalAndroid.content.ComponentName): void;
							public onNullBinding(param0: globalAndroid.content.ComponentName): void;
							public onServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.os.IBinder): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzai extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzai>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzaj extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzaj>;
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzak extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzak>;
							public constructor(param0: string, param1: string, param2: boolean);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzal extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzal>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.zzal interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getAccount(): globalAndroid.accounts.Account;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
							public getAccount(): globalAndroid.accounts.Account;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export abstract class zzam extends com.google.android.gms.internal.zzee implements com.google.android.gms.common.internal.zzal {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzam>;
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public pingBinder(): boolean;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public getAccount(): globalAndroid.accounts.Account;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzan extends com.google.android.gms.internal.zzed implements com.google.android.gms.common.internal.zzal {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzan>;
							public asBinder(): globalAndroid.os.IBinder;
							public getAccount(): globalAndroid.accounts.Account;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzao extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzao>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.zzao interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								cancel(): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public cancel(): void;
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export abstract class zzap extends com.google.android.gms.internal.zzee implements com.google.android.gms.common.internal.zzao {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzap>;
							public cancel(): void;
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public pingBinder(): boolean;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzaq extends com.google.android.gms.internal.zzed implements com.google.android.gms.common.internal.zzao {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzaq>;
							public cancel(): void;
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzar extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzar>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.zzar interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzoY(): com.google.android.gms.dynamic.IObjectWrapper;
								zzoZ(): number;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export abstract class zzas extends com.google.android.gms.internal.zzee implements com.google.android.gms.common.internal.zzar {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzas>;
							public constructor();
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public pingBinder(): boolean;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzat extends com.google.android.gms.internal.zzed implements com.google.android.gms.common.internal.zzar {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzat>;
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzau extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzau>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.zzau interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: number, param1: globalAndroid.os.IBinder, param2: globalAndroid.os.Bundle): void;
								zza(param0: number, param1: globalAndroid.os.Bundle): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export abstract class zzav extends com.google.android.gms.internal.zzee implements com.google.android.gms.common.internal.zzau {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzav>;
							public constructor();
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public pingBinder(): boolean;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzaw extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzaw>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.zzaw interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: any /* com.google.android.gms.common.internal.zzau*/, param1: any /* com.google.android.gms.common.internal.zzx*/): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzax extends java.lang.Object implements com.google.android.gms.common.internal.zzaw {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzax>;
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzay extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzay>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.zzay interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzrF(): com.google.android.gms.dynamic.IObjectWrapper;
								zzrG(): com.google.android.gms.dynamic.IObjectWrapper;
								zze(param0: string, param1: com.google.android.gms.dynamic.IObjectWrapper): boolean;
								zzf(param0: string, param1: com.google.android.gms.dynamic.IObjectWrapper): boolean;
								zza(param0: any /* com.google.android.gms.common.zzm*/, param1: com.google.android.gms.dynamic.IObjectWrapper): boolean;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export abstract class zzaz extends com.google.android.gms.internal.zzee implements com.google.android.gms.common.internal.zzay {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzaz>;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public pingBinder(): boolean;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzb extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzba extends com.google.android.gms.internal.zzed implements com.google.android.gms.common.internal.zzay {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzba>;
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzbb extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzbb>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.zzbb interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: any /* com.google.android.gms.common.internal.zzbt*/): com.google.android.gms.dynamic.IObjectWrapper;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzbc extends com.google.android.gms.internal.zzed implements com.google.android.gms.common.internal.zzbb {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzbc>;
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzbd extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzbd>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzbe extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzbe>;
							public static equal(param0: any, param1: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzbf extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzbf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzbg extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzbg>;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzbh extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzbh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzbi extends java.lang.Object implements com.google.android.gms.common.internal.zzbn {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzbi>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzbj extends java.lang.Object implements com.google.android.gms.common.api.PendingResult.zza {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzbj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzbk extends java.lang.Object /* com.google.android.gms.common.internal.zzbm<any,any>*/ {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzbk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzbl extends com.google.android.gms.common.internal.zzbm<any,java.lang.Void> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzbl>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzbm<R, T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzbm<any,any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.zzbm<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzd(param0: R): T;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzbn extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzbn>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.zzbn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzy(param0: com.google.android.gms.common.api.Status): com.google.android.gms.common.api.ApiException;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzbo extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzbo>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzbp extends com.google.android.gms.common.internal.safeparcel.zza {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzbp>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.zzbp>*/;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: globalAndroid.accounts.Account, param1: number, param2: com.google.android.gms.auth.api.signin.GoogleSignInAccount);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzbq extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.zzbp>*/ {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzbq>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzbr extends com.google.android.gms.common.internal.safeparcel.zza {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzbr>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.zzbr>*/;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzbs extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.zzbr>*/ {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzbs>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzbt extends com.google.android.gms.common.internal.safeparcel.zza {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzbt>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.zzbt>*/;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: number, param1: number, param2: native.Array<com.google.android.gms.common.api.Scope>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzbu extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.zzbt>*/ {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzbu>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzbv extends java.lang.Object /* com.google.android.gms.dynamic.zzp<com.google.android.gms.common.internal.zzbb>*/ {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzbv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzbw extends globalAndroid.widget.Button {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzbw>;
							public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
							public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
							public onPreDraw(): boolean;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
							public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
							public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
							public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
							public sendAccessibilityEvent(param0: number): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
							public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
							public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzbx<T>  extends java.lang.Object /* com.google.android.gms.common.internal.zzz<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzbx<any>>;
							public disconnect(): void;
							public isConnected(): boolean;
							public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
							public isConnecting(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzby extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzby>;
							public getString(param0: string): string;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzbz extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzbz>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzc extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export abstract class zzd<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzd<any>>;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: any /* com.google.android.gms.common.internal.zzf*/, param4: any /* com.google.android.gms.common.internal.zzg*/, param5: string);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: any /* com.google.android.gms.common.internal.zzae*/, param3: any /* com.google.android.gms.common.zze*/, param4: number, param5: any /* com.google.android.gms.common.internal.zzf*/, param6: any /* com.google.android.gms.common.internal.zzg*/, param7: string);
							public getContext(): globalAndroid.content.Context;
							public disconnect(): void;
							public isConnected(): boolean;
							public getAccount(): globalAndroid.accounts.Account;
							public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
							public getLooper(): globalAndroid.os.Looper;
							public onConnectionSuspended(param0: number): void;
							public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
							public isConnecting(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export abstract class zze extends com.google.android.gms.common.internal.zzi<java.lang.Boolean> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zze>;
							public constructor(param0: any);
							public constructor(param0: any /* com.google.android.gms.common.internal.zzd<any>*/, param1: number, param2: globalAndroid.os.Bundle);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzf extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzf>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.zzf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onConnected(param0: globalAndroid.os.Bundle): void;
								onConnectionSuspended(param0: number): void;
							});
							public constructor();
							public onConnected(param0: globalAndroid.os.Bundle): void;
							public onConnectionSuspended(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzg extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzg>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.zzg interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
							});
							public constructor();
							public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzh extends globalAndroid.os.Handler {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzh>;
							public constructor();
							public constructor(param0: globalAndroid.os.Looper);
							public constructor(param0: globalAndroid.os.Looper, param1: globalAndroid.os.Handler.Callback);
							public constructor(param0: globalAndroid.os.Handler.Callback);
							public constructor(param0: any /* com.google.android.gms.common.internal.zzd<any>*/, param1: globalAndroid.os.Looper);
							public handleMessage(param0: globalAndroid.os.Message): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export abstract class zzi<TListener>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzi<any>>;
							public unregister(): void;
							public removeListener(): void;
							public constructor(param0: TListener);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzj extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzj>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.zzj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzf(param0: com.google.android.gms.common.ConnectionResult): void;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzk extends com.google.android.gms.common.internal.zzav {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzk>;
							public constructor();
							public constructor(param0: any /* com.google.android.gms.common.internal.zzd<any>*/, param1: number);
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public pingBinder(): boolean;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzl extends java.lang.Object implements globalAndroid.content.ServiceConnection {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzl>;
							public constructor(param0: any /* com.google.android.gms.common.internal.zzd<any>*/, param1: number);
							public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
							public onBindingDied(param0: globalAndroid.content.ComponentName): void;
							public onNullBinding(param0: globalAndroid.content.ComponentName): void;
							public onServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.os.IBinder): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzm extends java.lang.Object implements com.google.android.gms.common.internal.zzj {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzm>;
							public constructor(param0: any /* com.google.android.gms.common.internal.zzd<any>*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzn extends java.lang.Object /* com.google.android.gms.common.internal.zze*/ {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzn>;
							public constructor(param0: any /* com.google.android.gms.common.internal.zzd<any>*/, param1: number, param2: globalAndroid.os.IBinder, param3: globalAndroid.os.Bundle);
							public constructor(param0: any);
							public constructor(param0: any /* com.google.android.gms.common.internal.zzd<any>*/, param1: number, param2: globalAndroid.os.Bundle);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzo extends java.lang.Object /* com.google.android.gms.common.internal.zze*/ {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzo>;
							public constructor(param0: any);
							public constructor(param0: any /* com.google.android.gms.common.internal.zzd<any>*/, param1: number, param2: globalAndroid.os.Bundle);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzp extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.BinderWrapper> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzp>;
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzq extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzq>;
							/** @deprecated */
							public getAccountName(): string;
							public getAccount(): globalAndroid.accounts.Account;
							public constructor(param0: globalAndroid.accounts.Account, param1: java.util.Set<com.google.android.gms.common.api.Scope>, param2: any /* java.util.Map<com.google.android.gms.common.api.Api<any>,com.google.android.gms.common.internal.zzr>*/, param3: number, param4: globalAndroid.view.View, param5: string, param6: string, param7: any /* com.google.android.gms.internal.zzctl*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzr extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzr>;
							public constructor(param0: java.util.Set<com.google.android.gms.common.api.Scope>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzs extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzs>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export abstract class zzt extends java.lang.Object implements globalAndroid.content.DialogInterface.OnClickListener {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzt>;
							public constructor();
							public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzu extends com.google.android.gms.common.internal.zzt {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzu>;
							public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzv extends com.google.android.gms.common.internal.zzt {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzv>;
							public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzw extends com.google.android.gms.common.internal.zzt {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzw>;
							public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzx extends com.google.android.gms.common.internal.safeparcel.zza {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzx>;
							public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.zzx>*/;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzy extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.zzx>*/ {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzy>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export abstract class zzz<T>  extends java.lang.Object /* com.google.android.gms.common.internal.zzd<any>*/ {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzz<any>>;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: any /* com.google.android.gms.common.internal.zzf*/, param4: any /* com.google.android.gms.common.internal.zzg*/, param5: string);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: any /* com.google.android.gms.common.internal.zzae*/, param3: any /* com.google.android.gms.common.zze*/, param4: number, param5: any /* com.google.android.gms.common.internal.zzf*/, param6: any /* com.google.android.gms.common.internal.zzg*/, param7: string);
							public disconnect(): void;
							public getAccount(): globalAndroid.accounts.Account;
							public isConnected(): boolean;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: any /* com.google.android.gms.common.internal.zzq*/, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
							public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
							public isConnecting(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module stats {
						export abstract class StatsEvent extends com.google.android.gms.common.internal.safeparcel.zza implements com.google.android.gms.common.internal.ReflectedParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.stats.StatsEvent>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public describeContents(): number;
							public toString(): string;
							public getEventType(): number;
							public getTimeMillis(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module stats {
						export class WakeLockEvent extends com.google.android.gms.common.stats.StatsEvent {
							public static class: java.lang.Class<com.google.android.gms.common.stats.WakeLockEvent>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.stats.WakeLockEvent>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: number, param1: number, param2: string, param3: number, param4: java.util.List<string>, param5: string, param6: number, param7: number, param8: string, param9: string, param10: number, param11: number, param12: string);
							public getEventType(): number;
							public getTimeMillis(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module stats {
						export class zza extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.stats.zza>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module stats {
						export class zzb extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.stats.zzb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module stats {
						export class zzc extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.stats.zzc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module stats {
						export class zzd extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.stats.WakeLockEvent> {
							public static class: java.lang.Class<com.google.android.gms.common.stats.zzd>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module stats {
						export class zze extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.stats.zze>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class DynamiteApi extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.google.android.gms.common.util.DynamiteApi>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.util.DynamiteApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								equals(param0: any): boolean;
								hashCode(): number;
								toString(): string;
								annotationType(): java.lang.Class<any>;
							});
							public constructor();
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class zza<E>  extends java.util.AbstractSet<any> {
							public static class: java.lang.Class<com.google.android.gms.common.util.zza<any>>;
							public constructor();
							public contains(param0: any): boolean;
							public size(): number;
							public iterator(): java.util.Iterator<any>;
							public containsAll(param0: java.util.Collection<any>): boolean;
							public hashCode(): number;
							public spliterator(): java.util.Spliterator<any>;
							public remove(param0: any): boolean;
							public clear(): void;
							public toArray(): native.Array<any>;
							public removeIf(param0: any /* any*/): boolean;
							public stream(): java.util.stream.Stream<any>;
							public constructor(param0: number);
							public addAll(param0: java.util.Collection<any>): boolean;
							public add(param0: any): boolean;
							public removeAll(param0: java.util.Collection<any>): boolean;
							public toArray(param0: native.Array<any>): native.Array<any>;
							public isEmpty(): boolean;
							public equals(param0: any): boolean;
							public retainAll(param0: java.util.Collection<any>): boolean;
							public parallelStream(): java.util.stream.Stream<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class zzb extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.util.zzb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class zzc extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.util.zzc>;
							public static encode(param0: native.Array<number>): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class zzd extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.util.zzd>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class zze extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.util.zze>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.util.zze interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								currentTimeMillis(): number;
								elapsedRealtime(): number;
								nanoTime(): number;
							});
							public constructor();
							public nanoTime(): number;
							public elapsedRealtime(): number;
							public currentTimeMillis(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class zzf extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.util.zzf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class zzg extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.util.zzg>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class zzh extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.util.zzh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class zzi extends java.lang.Object implements com.google.android.gms.common.util.zze {
							public static class: java.lang.Class<com.google.android.gms.common.util.zzi>;
							public nanoTime(): number;
							public elapsedRealtime(): number;
							public currentTimeMillis(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class zzj extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.util.zzj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class zzk extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.util.zzk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class zzl extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.util.zzl>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class zzm extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.util.zzm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class zzn extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.util.zzn>;
							public static closeQuietly(param0: java.io.Closeable): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class zzo extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.util.zzo>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class zzp extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.util.zzp>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class zzq extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.util.zzq>;
							public static isAtLeastN(): boolean;
							public static isAtLeastO(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class zzr extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.util.zzr>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class zzs extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.util.zzs>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class zzt extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.util.zzt>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class zzu extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.util.zzu>;
							public static getNoBackupFilesDir(param0: globalAndroid.content.Context): java.io.File;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class zzv extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.util.zzv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class zzw extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.util.zzw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class zzx extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.util.zzx>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zza extends java.lang.Object implements globalAndroid.content.ServiceConnection {
						public static class: java.lang.Class<com.google.android.gms.common.zza>;
						public constructor();
						public onNullBinding(param0: globalAndroid.content.ComponentName): void;
						public onServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.os.IBinder): void;
						public onBindingDied(param0: globalAndroid.content.ComponentName): void;
						public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zzb extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.ConnectionResult> {
						public static class: java.lang.Class<com.google.android.gms.common.zzb>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zzc extends com.google.android.gms.common.internal.safeparcel.zza {
						public static class: java.lang.Class<com.google.android.gms.common.zzc>;
						public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.zzc>*/;
						public constructor();
						public constructor(param0: string, param1: number);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zzd extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.zzc>*/ {
						public static class: java.lang.Class<com.google.android.gms.common.zzd>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zze extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.common.zze>;
						public static GOOGLE_PLAY_SERVICES_VERSION_CODE: number;
						public static GOOGLE_PLAY_SERVICES_PACKAGE: string;
						/** @deprecated */
						public getOpenSourceSoftwareLicenseInfo(param0: globalAndroid.content.Context): string;
						public getErrorString(param0: number): string;
						public isGooglePlayServicesAvailable(param0: globalAndroid.content.Context): number;
						public getErrorResolutionPendingIntent(param0: globalAndroid.content.Context, param1: number, param2: number): globalAndroid.app.PendingIntent;
						public isUserResolvableError(param0: number): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zzf extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.common.zzf>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export abstract class zzg extends com.google.android.gms.common.internal.zzas {
						public static class: java.lang.Class<com.google.android.gms.common.zzg>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public constructor();
						public constructor(param0: native.Array<number>);
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zzh extends com.google.android.gms.common.zzg {
						public static class: java.lang.Class<com.google.android.gms.common.zzh>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export abstract class zzi extends com.google.android.gms.common.zzg {
						public static class: java.lang.Class<com.google.android.gms.common.zzi>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zzj extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.common.zzj>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zzk extends com.google.android.gms.common.zzi {
						public static class: java.lang.Class<com.google.android.gms.common.zzk>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zzl extends com.google.android.gms.common.zzi {
						public static class: java.lang.Class<com.google.android.gms.common.zzl>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zzm extends com.google.android.gms.common.internal.safeparcel.zza {
						public static class: java.lang.Class<com.google.android.gms.common.zzm>;
						public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.zzm>*/;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zzn extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.zzm>*/ {
						public static class: java.lang.Class<com.google.android.gms.common.zzn>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zzo extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.common.zzo>;
						public static GOOGLE_PLAY_SERVICES_VERSION_CODE: number;
						public static GOOGLE_PLAY_SERVICES_PACKAGE: string;
						public static GOOGLE_PLAY_STORE_PACKAGE: string;
						public static getRemoteResource(param0: globalAndroid.content.Context): globalAndroid.content.res.Resources;
						/** @deprecated */
						public static getOpenSourceSoftwareLicenseInfo(param0: globalAndroid.content.Context): string;
						/** @deprecated */
						public static getErrorPendingIntent(param0: number, param1: globalAndroid.content.Context, param2: number): globalAndroid.app.PendingIntent;
						/** @deprecated */
						public static isUserRecoverableError(param0: number): boolean;
						/** @deprecated */
						public static isGooglePlayServicesAvailable(param0: globalAndroid.content.Context): number;
						public static getRemoteContext(param0: globalAndroid.content.Context): globalAndroid.content.Context;
						/** @deprecated */
						public static getErrorString(param0: number): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zzp extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.common.zzp>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class IObjectWrapper extends java.lang.Object implements globalAndroid.os.IInterface {
						public static class: java.lang.Class<com.google.android.gms.dynamic.IObjectWrapper>;
						/**
						 * Constructs a new instance of the com.google.android.gms.dynamic.IObjectWrapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							asBinder(): globalAndroid.os.IBinder;
						});
						public constructor();
						public asBinder(): globalAndroid.os.IBinder;
					}
					export module IObjectWrapper {
						export class zza extends com.google.android.gms.internal.zzee implements com.google.android.gms.dynamic.IObjectWrapper {
							public static class: java.lang.Class<com.google.android.gms.dynamic.IObjectWrapper.zza>;
							public constructor();
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public pingBinder(): boolean;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class LifecycleDelegate extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.dynamic.LifecycleDelegate>;
						/**
						 * Constructs a new instance of the com.google.android.gms.dynamic.LifecycleDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onInflate(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle): void;
							onCreate(param0: globalAndroid.os.Bundle): void;
							onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
							onStart(): void;
							onResume(): void;
							onPause(): void;
							onStop(): void;
							onDestroyView(): void;
							onDestroy(): void;
							onLowMemory(): void;
							onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						});
						public constructor();
						public onDestroyView(): void;
						public onDestroy(): void;
						public onInflate(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle): void;
						public onResume(): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public onStop(): void;
						public onLowMemory(): void;
						public onStart(): void;
						public onPause(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export abstract class zza<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zza<any>>;
						public onDestroyView(): void;
						public constructor();
						public onDestroy(): void;
						public onInflate(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle): void;
						public onResume(): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public onStop(): void;
						public onLowMemory(): void;
						public onStart(): void;
						public onPause(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class zzb extends java.lang.Object /* com.google.android.gms.dynamic.zzo<any>*/ {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zzb>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class zzc extends java.lang.Object implements com.google.android.gms.dynamic.zzi {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zzc>;
						public getState(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class zzd extends java.lang.Object implements com.google.android.gms.dynamic.zzi {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zzd>;
						public getState(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class zze extends java.lang.Object implements com.google.android.gms.dynamic.zzi {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zze>;
						public getState(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class zzf extends java.lang.Object implements globalAndroid.view.View.OnClickListener {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zzf>;
						public onClick(param0: globalAndroid.view.View): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class zzg extends java.lang.Object implements com.google.android.gms.dynamic.zzi {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zzg>;
						public getState(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class zzh extends java.lang.Object implements com.google.android.gms.dynamic.zzi {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zzh>;
						public getState(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class zzi extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zzi>;
						/**
						 * Constructs a new instance of the com.google.android.gms.dynamic.zzi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getState(): number;
							zzb(param0: com.google.android.gms.dynamic.LifecycleDelegate): void;
						});
						public constructor();
						public getState(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class zzj extends com.google.android.gms.dynamic.zzl {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zzj>;
						public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
						public setHasOptionsMenu(param0: boolean): void;
						public isInLayout(): boolean;
						public getInterfaceDescriptor(): string;
						public getTargetRequestCode(): number;
						public isVisible(): boolean;
						public isDetached(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public setUserVisibleHint(param0: boolean): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public setRetainInstance(param0: boolean): void;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public isRemoving(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public setMenuVisibility(param0: boolean): void;
						public getRetainInstance(): boolean;
						public getUserVisibleHint(): boolean;
						public isResumed(): boolean;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public getId(): number;
						public getArguments(): globalAndroid.os.Bundle;
						public getView(): com.google.android.gms.dynamic.IObjectWrapper;
						public isHidden(): boolean;
						public startActivity(param0: globalAndroid.content.Intent): void;
						public isBinderAlive(): boolean;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public isAdded(): boolean;
						public getTag(): string;
						public pingBinder(): boolean;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class zzk extends java.lang.Object implements globalAndroid.os.IInterface {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zzk>;
						/**
						 * Constructs a new instance of the com.google.android.gms.dynamic.zzk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zzty(): com.google.android.gms.dynamic.IObjectWrapper;
							getArguments(): globalAndroid.os.Bundle;
							getId(): number;
							zztz(): any /* com.google.android.gms.dynamic.zzk*/;
							zztA(): com.google.android.gms.dynamic.IObjectWrapper;
							getRetainInstance(): boolean;
							getTag(): string;
							zztB(): any /* com.google.android.gms.dynamic.zzk*/;
							getTargetRequestCode(): number;
							getUserVisibleHint(): boolean;
							getView(): com.google.android.gms.dynamic.IObjectWrapper;
							isAdded(): boolean;
							isDetached(): boolean;
							isHidden(): boolean;
							isInLayout(): boolean;
							isRemoving(): boolean;
							isResumed(): boolean;
							isVisible(): boolean;
							zzC(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
							setHasOptionsMenu(param0: boolean): void;
							setMenuVisibility(param0: boolean): void;
							setRetainInstance(param0: boolean): void;
							setUserVisibleHint(param0: boolean): void;
							startActivity(param0: globalAndroid.content.Intent): void;
							startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
							zzD(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
							asBinder(): globalAndroid.os.IBinder;
						});
						public constructor();
						public setRetainInstance(param0: boolean): void;
						public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
						public isRemoving(): boolean;
						public setHasOptionsMenu(param0: boolean): void;
						public setMenuVisibility(param0: boolean): void;
						public getRetainInstance(): boolean;
						public getUserVisibleHint(): boolean;
						public isResumed(): boolean;
						public getId(): number;
						public isInLayout(): boolean;
						public getArguments(): globalAndroid.os.Bundle;
						public getView(): com.google.android.gms.dynamic.IObjectWrapper;
						public isHidden(): boolean;
						public startActivity(param0: globalAndroid.content.Intent): void;
						public getTargetRequestCode(): number;
						public isVisible(): boolean;
						public isAdded(): boolean;
						public getTag(): string;
						public isDetached(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public setUserVisibleHint(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export abstract class zzl extends com.google.android.gms.internal.zzee implements com.google.android.gms.dynamic.zzk {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zzl>;
						public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
						public setHasOptionsMenu(param0: boolean): void;
						public isInLayout(): boolean;
						public getInterfaceDescriptor(): string;
						public getTargetRequestCode(): number;
						public isVisible(): boolean;
						public isDetached(): boolean;
						public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public setUserVisibleHint(param0: boolean): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public setRetainInstance(param0: boolean): void;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public constructor();
						public isRemoving(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public setMenuVisibility(param0: boolean): void;
						public getRetainInstance(): boolean;
						public getUserVisibleHint(): boolean;
						public isResumed(): boolean;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public getId(): number;
						public getArguments(): globalAndroid.os.Bundle;
						public getView(): com.google.android.gms.dynamic.IObjectWrapper;
						public isHidden(): boolean;
						public startActivity(param0: globalAndroid.content.Intent): void;
						public isBinderAlive(): boolean;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public isAdded(): boolean;
						public getTag(): string;
						public pingBinder(): boolean;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class zzm extends com.google.android.gms.internal.zzed implements com.google.android.gms.dynamic.IObjectWrapper {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zzm>;
						public asBinder(): globalAndroid.os.IBinder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class zzn<T>  extends java.lang.Object /* com.google.android.gms.dynamic.IObjectWrapper.zza*/ {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zzn<any>>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class zzo<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zzo<any>>;
						/**
						 * Constructs a new instance of the com.google.android.gms.dynamic.zzo<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zza(param0: T): void;
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export abstract class zzp<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zzp<any>>;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class zzq extends java.lang.Exception {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zzq>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class zzr extends com.google.android.gms.dynamic.zzl {
						public static class: java.lang.Class<com.google.android.gms.dynamic.zzr>;
						public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
						public setHasOptionsMenu(param0: boolean): void;
						public isInLayout(): boolean;
						public getInterfaceDescriptor(): string;
						public getTargetRequestCode(): number;
						public isVisible(): boolean;
						public isDetached(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public setUserVisibleHint(param0: boolean): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public setRetainInstance(param0: boolean): void;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public isRemoving(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public setMenuVisibility(param0: boolean): void;
						public getRetainInstance(): boolean;
						public getUserVisibleHint(): boolean;
						public isResumed(): boolean;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public getId(): number;
						public getArguments(): globalAndroid.os.Bundle;
						public getView(): com.google.android.gms.dynamic.IObjectWrapper;
						public isHidden(): boolean;
						public startActivity(param0: globalAndroid.content.Intent): void;
						public isBinderAlive(): boolean;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public isAdded(): boolean;
						public getTag(): string;
						public pingBinder(): boolean;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class DynamiteModule extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule>;
					}
					export module DynamiteModule {
						export class DynamiteLoaderClassLoader extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule.DynamiteLoaderClassLoader>;
							public static sClassLoader: java.lang.ClassLoader;
							public constructor();
						}
						export class zza extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule.zza>;
						}
						export class zzb extends java.lang.Object implements com.google.android.gms.dynamite.zzh {
							public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule.zzb>;
							public constructor(param0: number, param1: number);
						}
						export class zzc extends java.lang.Exception {
							public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule.zzc>;
						}
						export class zzd extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule.zzd>;
							/**
							 * Constructs a new instance of the com.google.android.gms.dynamite.DynamiteModule$zzd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: globalAndroid.content.Context, param1: string, param2: any /* com.google.android.gms.dynamite.zzh*/): any /* com.google.android.gms.dynamite.zzi*/;
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class zza extends java.lang.Object implements com.google.android.gms.dynamite.zzh {
						public static class: java.lang.Class<com.google.android.gms.dynamite.zza>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class zzb extends java.lang.Object implements com.google.android.gms.dynamite.DynamiteModule.zzd {
						public static class: java.lang.Class<com.google.android.gms.dynamite.zzb>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class zzc extends java.lang.Object implements com.google.android.gms.dynamite.DynamiteModule.zzd {
						public static class: java.lang.Class<com.google.android.gms.dynamite.zzc>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class zzd extends java.lang.Object implements com.google.android.gms.dynamite.DynamiteModule.zzd {
						public static class: java.lang.Class<com.google.android.gms.dynamite.zzd>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class zze extends java.lang.Object implements com.google.android.gms.dynamite.DynamiteModule.zzd {
						public static class: java.lang.Class<com.google.android.gms.dynamite.zze>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class zzf extends java.lang.Object implements com.google.android.gms.dynamite.DynamiteModule.zzd {
						public static class: java.lang.Class<com.google.android.gms.dynamite.zzf>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class zzg extends dalvik.system.PathClassLoader {
						public static class: java.lang.Class<com.google.android.gms.dynamite.zzg>;
						public loadClass(param0: string): java.lang.Class<any>;
						public loadClass(param0: string, param1: boolean): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class zzh extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.dynamite.zzh>;
						/**
						 * Constructs a new instance of the com.google.android.gms.dynamite.zzh interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zzb(param0: globalAndroid.content.Context, param1: string, param2: boolean): number;
							zzE(param0: globalAndroid.content.Context, param1: string): number;
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class zzi extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.dynamite.zzi>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class zzj extends java.lang.Object implements globalAndroid.os.IInterface {
						public static class: java.lang.Class<com.google.android.gms.dynamite.zzj>;
						/**
						 * Constructs a new instance of the com.google.android.gms.dynamite.zzj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zza(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: string, param2: number): com.google.android.gms.dynamic.IObjectWrapper;
							zza(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: string, param2: boolean): number;
							asBinder(): globalAndroid.os.IBinder;
						});
						public constructor();
						public asBinder(): globalAndroid.os.IBinder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class zzk extends com.google.android.gms.internal.zzed implements com.google.android.gms.dynamite.zzj {
						public static class: java.lang.Class<com.google.android.gms.dynamite.zzk>;
						public asBinder(): globalAndroid.os.IBinder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class zzl extends java.lang.Object implements globalAndroid.os.IInterface {
						public static class: java.lang.Class<com.google.android.gms.dynamite.zzl>;
						/**
						 * Constructs a new instance of the com.google.android.gms.dynamite.zzl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zza(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: string, param2: number, param3: com.google.android.gms.dynamic.IObjectWrapper): com.google.android.gms.dynamic.IObjectWrapper;
							asBinder(): globalAndroid.os.IBinder;
						});
						public constructor();
						public asBinder(): globalAndroid.os.IBinder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class zzm extends com.google.android.gms.internal.zzed implements com.google.android.gms.dynamite.zzl {
						public static class: java.lang.Class<com.google.android.gms.dynamite.zzm>;
						public asBinder(): globalAndroid.os.IBinder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module flags {
					export module impl {
						export class FlagProviderImpl extends com.google.android.gms.internal.zzcad {
							public static class: java.lang.Class<com.google.android.gms.flags.impl.FlagProviderImpl>;
							public constructor();
							public init(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
							public getStringFlagValue(param0: string, param1: string, param2: number): string;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public getIntFlagValue(param0: string, param1: number, param2: number): number;
							public pingBinder(): boolean;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getLongFlagValue(param0: string, param1: number, param2: number): number;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public getBooleanFlagValue(param0: string, param1: boolean, param2: number): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module flags {
					export module impl {
						export class zza<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.flags.impl.zza<any>>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module flags {
					export module impl {
						export class zzb extends com.google.android.gms.flags.impl.zza<java.lang.Boolean> {
							public static class: java.lang.Class<com.google.android.gms.flags.impl.zzb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module flags {
					export module impl {
						export class zzc extends java.util.concurrent.Callable<java.lang.Boolean> {
							public static class: java.lang.Class<com.google.android.gms.flags.impl.zzc>;
							public call(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module flags {
					export module impl {
						export class zzd extends com.google.android.gms.flags.impl.zza<java.lang.Integer> {
							public static class: java.lang.Class<com.google.android.gms.flags.impl.zzd>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module flags {
					export module impl {
						export class zze extends java.util.concurrent.Callable<java.lang.Integer> {
							public static class: java.lang.Class<com.google.android.gms.flags.impl.zze>;
							public call(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module flags {
					export module impl {
						export class zzf extends com.google.android.gms.flags.impl.zza<java.lang.Long> {
							public static class: java.lang.Class<com.google.android.gms.flags.impl.zzf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module flags {
					export module impl {
						export class zzg extends java.util.concurrent.Callable<java.lang.Long> {
							public static class: java.lang.Class<com.google.android.gms.flags.impl.zzg>;
							public call(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module flags {
					export module impl {
						export class zzh extends java.lang.Object /* com.google.android.gms.flags.impl.zza<string>*/ {
							public static class: java.lang.Class<com.google.android.gms.flags.impl.zzh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module flags {
					export module impl {
						export class zzi extends java.util.concurrent.Callable<string> {
							public static class: java.lang.Class<com.google.android.gms.flags.impl.zzi>;
							public call(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module flags {
					export module impl {
						export class zzj extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.flags.impl.zzj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module flags {
					export module impl {
						export class zzk extends java.util.concurrent.Callable<globalAndroid.content.SharedPreferences> {
							public static class: java.lang.Class<com.google.android.gms.flags.impl.zzk>;
							public call(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class adg extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.adg>;
						public readBytes(): native.Array<number>;
						public getPosition(): number;
						public readString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class adh extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.adh>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class adi extends java.io.IOException {
						public static class: java.lang.Class<com.google.android.gms.internal.adi>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class adj<M>  extends com.google.android.gms.internal.adp {
						public static class: java.lang.Class<com.google.android.gms.internal.adj<any>>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class adk<M, T>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.adk<any,any>>;
						public tag: number;
						public equals(param0: any): boolean;
						public hashCode(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class adl extends java.lang.Object implements java.lang.Cloneable {
						public static class: java.lang.Class<com.google.android.gms.internal.adl>;
						public isEmpty(): boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class adm extends java.lang.Object implements java.lang.Cloneable {
						public static class: java.lang.Class<com.google.android.gms.internal.adm>;
						public equals(param0: any): boolean;
						public hashCode(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class adn extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.adn>;
						public static UTF_8: java.nio.charset.Charset;
						public static equals(param0: native.Array<boolean>, param1: native.Array<boolean>): boolean;
						public static equals(param0: native.Array<number>, param1: native.Array<number>): boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public static hashCode(param0: native.Array<number>): number;
						public static equals(param0: native.Array<any>, param1: native.Array<any>): boolean;
						public static hashCode(param0: native.Array<any>): number;
						public static hashCode(param0: native.Array<boolean>): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class ado extends java.io.IOException {
						public static class: java.lang.Class<com.google.android.gms.internal.ado>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class adp extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.adp>;
						public constructor();
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class adq extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.adq>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class adr extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.adr>;
						public equals(param0: any): boolean;
						public hashCode(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class ads extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.ads>;
						public static EMPTY_STRING_ARRAY: native.Array<string>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class aeg extends com.google.android.gms.internal.adj<com.google.android.gms.internal.aeg> implements java.lang.Cloneable  {
						public static class: java.lang.Class<com.google.android.gms.internal.aeg>;
						public constructor();
						public equals(param0: any): boolean;
						public hashCode(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class aeh extends com.google.android.gms.internal.adj<com.google.android.gms.internal.aeh> implements java.lang.Cloneable  {
						public static class: java.lang.Class<com.google.android.gms.internal.aeh>;
						public constructor();
						public equals(param0: any): boolean;
						public hashCode(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class aei extends com.google.android.gms.internal.adj<com.google.android.gms.internal.aei> implements java.lang.Cloneable  {
						public static class: java.lang.Class<com.google.android.gms.internal.aei>;
						public constructor();
						public equals(param0: any): boolean;
						public hashCode(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class aej extends com.google.android.gms.internal.adj<com.google.android.gms.internal.aej> implements java.lang.Cloneable  {
						public static class: java.lang.Class<com.google.android.gms.internal.aej>;
						public constructor();
						public equals(param0: any): boolean;
						public hashCode(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class aek extends com.google.android.gms.internal.adj<com.google.android.gms.internal.aek> implements java.lang.Cloneable  {
						public static class: java.lang.Class<com.google.android.gms.internal.aek>;
						public constructor();
						public equals(param0: any): boolean;
						public hashCode(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class ael extends com.google.android.gms.internal.adj<com.google.android.gms.internal.ael> implements java.lang.Cloneable  {
						public static class: java.lang.Class<com.google.android.gms.internal.ael>;
						public constructor();
						public equals(param0: any): boolean;
						public hashCode(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class hi extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.hi>;
						public constructor();
						public static getLong(param0: globalAndroid.content.ContentResolver, param1: string, param2: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class hj extends globalAndroid.database.ContentObserver {
						public static class: java.lang.Class<com.google.android.gms.internal.hj>;
						public onChange(param0: boolean): void;
						public onChange(param0: boolean, param1: globalAndroid.net.Uri): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class ik extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.ik>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zza extends com.google.android.gms.internal.zzaa {
						public static class: java.lang.Class<com.google.android.gms.internal.zza>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: any /* com.google.android.gms.internal.zzn*/);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzaa extends java.lang.Exception {
						public static class: java.lang.Class<com.google.android.gms.internal.zzaa>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: any /* com.google.android.gms.internal.zzn*/);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzab extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzab>;
						public static DEBUG: boolean;
						public constructor();
					}
					export module zzab {
						export class zza extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.internal.zzab.zza>;
							public finalize(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzac extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzac>;
						public name: string;
						public time: number;
						public constructor(param0: string, param1: number, param2: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzad extends java.lang.Object implements com.google.android.gms.internal.zzk {
						public static class: java.lang.Class<com.google.android.gms.internal.zzad>;
						public constructor(param0: any /* com.google.android.gms.internal.zzan*/);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzae extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzae>;
						public constructor(param0: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzaf extends java.util.Comparator<native.Array<number>> {
						public static class: java.lang.Class<com.google.android.gms.internal.zzaf>;
						public thenComparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
						public static comparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
						public thenComparingLong(param0: any /* any*/): java.util.Comparator<any>;
						public equals(param0: any): boolean;
						public static comparingInt(param0: any /* any*/): java.util.Comparator<any>;
						public static comparingDouble(param0: any /* any*/): java.util.Comparator<any>;
						public static reverseOrder(): java.util.Comparator<any>;
						public static comparing(param0: any /* any*/): java.util.Comparator<any>;
						public thenComparingInt(param0: any /* any*/): java.util.Comparator<any>;
						public reversed(): java.util.Comparator<any>;
						public static nullsFirst(param0: java.util.Comparator<any>): java.util.Comparator<any>;
						public thenComparingDouble(param0: any /* any*/): java.util.Comparator<any>;
						public static nullsLast(param0: java.util.Comparator<any>): java.util.Comparator<any>;
						public thenComparing(param0: any /* any*/): java.util.Comparator<any>;
						public static naturalOrder(): java.util.Comparator<any>;
						public compare(param0: any, param1: any): number;
						public thenComparing(param0: java.util.Comparator<any>): java.util.Comparator<any>;
						public static comparingLong(param0: any /* any*/): java.util.Comparator<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzag extends java.lang.Object implements com.google.android.gms.internal.zzb {
						public static class: java.lang.Class<com.google.android.gms.internal.zzag>;
						public constructor(param0: java.io.File);
						public initialize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzah extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzah>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzai extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzai>;
						public size: number;
						public key: string;
						public constructor(param0: string, param1: any /* com.google.android.gms.internal.zzc*/);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzaj extends java.io.FilterInputStream {
						public static class: java.lang.Class<com.google.android.gms.internal.zzaj>;
						public read(): number;
						public read(param0: native.Array<number>): number;
						public close(): void;
						public read(param0: native.Array<number>, param1: number, param2: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzal {
						public static class: java.lang.Class<com.google.android.gms.internal.zzal>;
						public constructor();
						public getMethod(): string;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzam extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzam>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzap extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzap>;
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zzg(param0: string): string;
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzaq extends java.io.ByteArrayOutputStream {
						public static class: java.lang.Class<com.google.android.gms.internal.zzaq>;
						public constructor();
						public close(): void;
						public constructor(param0: number);
						public write(param0: number): void;
						public write(param0: native.Array<number>, param1: number, param2: number): void;
						public flush(): void;
						public write(param0: native.Array<number>): void;
						public constructor(param0: any /* com.google.android.gms.internal.zzae*/, param1: number);
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzar extends java.lang.Object /* com.google.android.gms.internal.zzp<string>*/ {
						public static class: java.lang.Class<com.google.android.gms.internal.zzar>;
						public constructor(param0: number, param1: string, param2: any /* com.google.android.gms.internal.zzu*/);
						public constructor(param0: number, param1: string, param2: any /* com.google.android.gms.internal.zzv<string>*/, param3: any /* com.google.android.gms.internal.zzu*/);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzas extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzas>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzb extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzb>;
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzb interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zza(param0: string): any /* com.google.android.gms.internal.zzc*/;
							zza(param0: string, param1: any /* com.google.android.gms.internal.zzc*/): void;
							initialize(): void;
						});
						public constructor();
						public initialize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzbam extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbam>;
						public constructor(param0: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbao<A>  extends java.lang.Object /* com.google.android.gms.internal.zzbam*/ {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbao<any>>;
						public constructor(param0: number);
						public constructor(param0: number, param1: any);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbas extends java.lang.Object implements com.google.android.gms.internal.zzbem {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbas>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbat<O>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbat<any>>;
						public hashCode(): number;
						public equals(param0: any): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbau extends com.google.android.gms.internal.zzbba {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbau>;
						public onCancel(param0: globalAndroid.content.DialogInterface): void;
						public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
						public onStop(): void;
						public onStart(): void;
					}
					export module zzbau {
						export class zza extends java.lang.Object implements com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener {
							public static class: java.lang.Class<com.google.android.gms.internal.zzbau.zza>;
							public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
							public constructor(param0: any /* com.google.android.gms.internal.zzbau*/, param1: number, param2: com.google.android.gms.common.api.GoogleApiClient, param3: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbaw extends java.lang.Object implements globalAndroid.app.Application.ActivityLifecycleCallbacks, globalAndroid.content.ComponentCallbacks2 {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbaw>;
						public onActivityPaused(param0: globalAndroid.app.Activity): void;
						public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
						public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
						public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
						public onActivityStarted(param0: globalAndroid.app.Activity): void;
						public onActivityResumed(param0: globalAndroid.app.Activity): void;
						public onTrimMemory(param0: number): void;
						public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
						public onLowMemory(): void;
						public onActivityStopped(param0: globalAndroid.app.Activity): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbax extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbax>;
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzbax interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zzac(param0: boolean): void;
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbaz<R>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbaz<any>>;
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzbaz<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setResult(param0: R): void;
							zzr(param0: com.google.android.gms.common.api.Status): void;
						});
						public constructor();
						public setResult(param0: R): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzbba extends com.google.android.gms.internal.zzbds implements globalAndroid.content.DialogInterface.OnCancelListener {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbba>;
						public mStarted: boolean;
						public onCancel(param0: globalAndroid.content.DialogInterface): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public constructor(param0: any /* com.google.android.gms.internal.zzbdt*/);
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
						public onStop(): void;
						public onStart(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbbb extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbbb>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbbc extends java.lang.Object implements java.lang.Runnable {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbbc>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbbd extends com.google.android.gms.internal.zzbdl {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbbd>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzbbe<R>  extends com.google.android.gms.common.api.PendingResult<any> {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbbe<any>>;
						public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>, param1: number, param2: java.util.concurrent.TimeUnit): void;
						public setResult(param0: any): void;
						public constructor();
						public cancel(): void;
						public isCanceled(): boolean;
						public then(param0: com.google.android.gms.common.api.ResultTransform<any,any>): com.google.android.gms.common.api.TransformedResult<any>;
						public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>): void;
						public isReady(): boolean;
						public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
						public await(): any;
						public await(param0: number, param1: java.util.concurrent.TimeUnit): any;
						/** @deprecated */
						public constructor(param0: globalAndroid.os.Looper);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbbf extends java.lang.ThreadLocal<java.lang.Boolean> {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbbf>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbbg<R>  extends globalAndroid.os.Handler {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbbg<any>>;
						public constructor(param0: globalAndroid.os.Looper, param1: globalAndroid.os.Handler.Callback);
						public constructor();
						public constructor(param0: globalAndroid.os.Handler.Callback);
						public constructor(param0: globalAndroid.os.Looper);
						public handleMessage(param0: globalAndroid.os.Message): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbbh extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbbh>;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbbi extends java.lang.Object implements com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbbi>;
						public onConnectionSuspended(param0: number): void;
						public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: boolean);
						public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
						public onConnected(param0: globalAndroid.os.Bundle): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbbj extends java.lang.Object implements com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbbj>;
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzbbj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zza(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
							onConnected(param0: globalAndroid.os.Bundle): void;
							onConnectionSuspended(param0: number): void;
						});
						public constructor();
						public static CAUSE_SERVICE_DISCONNECTED: number;
						public static CAUSE_NETWORK_LOST: number;
						public onConnectionSuspended(param0: number): void;
						public onConnected(param0: globalAndroid.os.Bundle): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbbk extends java.lang.Object implements com.google.android.gms.internal.zzbdp {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbbk>;
						public disconnect(): void;
						public blockingConnect(): com.google.android.gms.common.ConnectionResult;
						public blockingConnect(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
						public isConnected(): boolean;
						public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
						public connect(): void;
						public isConnecting(): boolean;
						public getConnectionResult(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbbl extends java.lang.Object implements java.lang.Runnable {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbbl>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbbm extends java.lang.Object implements com.google.android.gms.internal.zzbdq {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbbm>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbbn extends java.lang.Object implements com.google.android.gms.internal.zzbdq {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbbn>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbbo<O>  extends com.google.android.gms.common.api.GoogleApi<any> {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbbo<any>>;
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: any /* com.google.android.gms.common.api.GoogleApi.zza*/);
						/** @deprecated */
						public constructor(param0: globalAndroid.app.Activity, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: any /* com.google.android.gms.internal.zzbem*/);
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: globalAndroid.os.Looper);
						/** @deprecated */
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: globalAndroid.os.Looper, param4: any /* com.google.android.gms.internal.zzbem*/);
						/** @deprecated */
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: any, param3: any /* com.google.android.gms.internal.zzbem*/);
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: globalAndroid.os.Looper, param3: any /* com.google.android.gms.common.api.Api.zze*/, param4: any /* com.google.android.gms.internal.zzbbi*/, param5: any /* com.google.android.gms.common.internal.zzq*/, param6: any /* com.google.android.gms.common.api.Api.zza<any,com.google.android.gms.internal.zzctl>*/);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbbp extends java.lang.Object implements com.google.android.gms.internal.zzbdp {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbbp>;
						public disconnect(): void;
						public blockingConnect(): com.google.android.gms.common.ConnectionResult;
						public blockingConnect(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
						public isConnected(): boolean;
						public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
						public connect(): void;
						public isConnecting(): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: java.util.concurrent.locks.Lock, param2: globalAndroid.os.Looper, param3: any /* com.google.android.gms.common.zze*/, param4: any /* java.util.Map<com.google.android.gms.common.api.Api.zzc<any>,com.google.android.gms.common.api.Api.zze>*/, param5: any /* com.google.android.gms.common.internal.zzq*/, param6: java.util.Map<com.google.android.gms.common.api.Api<any>,java.lang.Boolean>, param7: any /* com.google.android.gms.common.api.Api.zza<any,com.google.android.gms.internal.zzctl>*/, param8: any /* java.util.ArrayList<com.google.android.gms.internal.zzbbi>*/, param9: any /* com.google.android.gms.internal.zzbcp*/, param10: boolean);
						public getConnectionResult(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbbq extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbbq>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzbbx<L>  extends java.lang.Object /* com.google.android.gms.internal.zzbdz<any>*/ {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbbx<any>>;
						public constructor(param0: com.google.android.gms.common.data.DataHolder);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbby extends java.lang.Object implements com.google.android.gms.common.api.Releasable, com.google.android.gms.common.api.Result {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbby>;
						public constructor(param0: com.google.android.gms.common.data.DataHolder, param1: com.google.android.gms.common.api.Status);
						public release(): void;
						public getStatus(): com.google.android.gms.common.api.Status;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbca extends java.lang.Object implements com.google.android.gms.internal.zzbcw {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbca>;
						public disconnect(): boolean;
						public onConnectionSuspended(param0: number): void;
						public constructor(param0: any /* com.google.android.gms.internal.zzbcx*/);
						public connect(): void;
						public begin(): void;
						public onConnected(param0: globalAndroid.os.Bundle): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbcb extends com.google.android.gms.internal.zzbcy {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbcb>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbcc extends com.google.android.gms.internal.zzbcy {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbcc>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbcd extends java.lang.Object implements com.google.android.gms.internal.zzbcw {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbcd>;
						public disconnect(): boolean;
						public onConnectionSuspended(param0: number): void;
						public constructor(param0: any /* com.google.android.gms.internal.zzbcx*/, param1: any /* com.google.android.gms.common.internal.zzq*/, param2: java.util.Map<com.google.android.gms.common.api.Api<any>,java.lang.Boolean>, param3: any /* com.google.android.gms.common.zze*/, param4: any /* com.google.android.gms.common.api.Api.zza<any,com.google.android.gms.internal.zzctl>*/, param5: java.util.concurrent.locks.Lock, param6: globalAndroid.content.Context);
						public connect(): void;
						public begin(): void;
						public onConnected(param0: globalAndroid.os.Bundle): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbce extends java.lang.Object implements java.lang.Runnable {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbce>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbcf extends java.lang.Object implements com.google.android.gms.common.internal.zzj {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbcf>;
						public constructor(param0: any /* com.google.android.gms.internal.zzbcd*/, param1: com.google.android.gms.common.api.Api<any>, param2: boolean);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbcg extends com.google.android.gms.internal.zzbcn {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbcg>;
						public run(): void;
						public constructor(param0: any /* java.util.Map<com.google.android.gms.common.api.Api.zze,com.google.android.gms.internal.zzbcf>*/);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbch extends com.google.android.gms.internal.zzbcy {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbch>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbci extends com.google.android.gms.internal.zzbcy {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbci>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbcj extends com.google.android.gms.internal.zzbcn {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbcj>;
						public run(): void;
						public constructor(param0: any /* java.util.ArrayList<com.google.android.gms.common.api.Api.zze>*/);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbck extends com.google.android.gms.internal.zzctp {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbck>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbcl extends com.google.android.gms.internal.zzbcy {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbcl>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbcm extends java.lang.Object implements com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbcm>;
						public onConnectionSuspended(param0: number): void;
						public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
						public onConnected(param0: globalAndroid.os.Bundle): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzbcn extends java.lang.Object implements java.lang.Runnable {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbcn>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbco extends java.lang.Object implements com.google.android.gms.internal.zzbcw {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbco>;
						public disconnect(): boolean;
						public onConnectionSuspended(param0: number): void;
						public constructor(param0: any /* com.google.android.gms.internal.zzbcx*/);
						public connect(): void;
						public begin(): void;
						public onConnected(param0: globalAndroid.os.Bundle): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbcq extends java.lang.Object implements com.google.android.gms.common.internal.zzad {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbcq>;
						public isConnected(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbcr extends java.lang.Object implements com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbcr>;
						public onConnectionSuspended(param0: number): void;
						public onConnected(param0: globalAndroid.os.Bundle): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbcs extends java.lang.Object implements com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbcs>;
						public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbct extends com.google.android.gms.common.api.ResultCallback<com.google.android.gms.common.api.Status> {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbct>;
						public onResult(param0: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbcu extends globalAndroid.os.Handler {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbcu>;
						public handleMessage(param0: globalAndroid.os.Message): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbcv extends com.google.android.gms.internal.zzbdl {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbcv>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbcw extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbcw>;
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzbcw interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							begin(): void;
							zzd(param0: any /* com.google.android.gms.internal.zzbay<any,any>*/): any /* com.google.android.gms.internal.zzbay<any,any>*/;
							zze(param0: any /* com.google.android.gms.internal.zzbay<any,any>*/): any /* com.google.android.gms.internal.zzbay<any,any>*/;
							disconnect(): boolean;
							connect(): void;
							onConnected(param0: globalAndroid.os.Bundle): void;
							zza(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
							onConnectionSuspended(param0: number): void;
						});
						public constructor();
						public disconnect(): boolean;
						public onConnectionSuspended(param0: number): void;
						public connect(): void;
						public begin(): void;
						public onConnected(param0: globalAndroid.os.Bundle): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbcx extends java.lang.Object implements com.google.android.gms.internal.zzbbj, com.google.android.gms.internal.zzbdp {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbcx>;
						public disconnect(): void;
						public onConnectionSuspended(param0: number): void;
						public blockingConnect(): com.google.android.gms.common.ConnectionResult;
						public blockingConnect(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
						public isConnected(): boolean;
						public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
						public constructor(param0: globalAndroid.content.Context, param1: any /* com.google.android.gms.internal.zzbcp*/, param2: java.util.concurrent.locks.Lock, param3: globalAndroid.os.Looper, param4: any /* com.google.android.gms.common.zze*/, param5: any /* java.util.Map<com.google.android.gms.common.api.Api.zzc<any>,com.google.android.gms.common.api.Api.zze>*/, param6: any /* com.google.android.gms.common.internal.zzq*/, param7: java.util.Map<com.google.android.gms.common.api.Api<any>,java.lang.Boolean>, param8: any /* com.google.android.gms.common.api.Api.zza<any,com.google.android.gms.internal.zzctl>*/, param9: any /* java.util.ArrayList<com.google.android.gms.internal.zzbbi>*/, param10: any /* com.google.android.gms.internal.zzbdq*/);
						public connect(): void;
						public isConnecting(): boolean;
						public getConnectionResult(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
						public onConnected(param0: globalAndroid.os.Bundle): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzbcy extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbcy>;
						public constructor(param0: any /* com.google.android.gms.internal.zzbcw*/);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbcz extends globalAndroid.os.Handler {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbcz>;
						public handleMessage(param0: globalAndroid.os.Message): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbda extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbda>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbdb extends java.lang.Object implements globalAndroid.os.Handler.Callback {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbdb>;
						public handleMessage(param0: globalAndroid.os.Message): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbdc extends java.lang.Object implements com.google.android.gms.internal.zzbax {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbdc>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbdd<O>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbdd<any>>;
						public resume(): void;
						public onConnectionSuspended(param0: number): void;
						public getInstanceId(): number;
						public constructor(param0: com.google.android.gms.common.api.GoogleApi<O>);
						public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
						public signOut(): void;
						public connect(): void;
						public onConnected(param0: globalAndroid.os.Bundle): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbde extends java.lang.Object implements java.lang.Runnable {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbde>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbdf extends java.lang.Object implements java.lang.Runnable {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbdf>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbdg extends java.lang.Object implements java.lang.Runnable {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbdg>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbdh extends java.lang.Object implements com.google.android.gms.common.internal.zzj, com.google.android.gms.internal.zzbel {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbdh>;
						public constructor(param0: any /* com.google.android.gms.common.api.Api.zze*/, param1: any /* com.google.android.gms.internal.zzbat<any>*/);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbdi extends java.lang.Object implements java.lang.Runnable {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbdi>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbdj<O>  extends java.lang.Object /* com.google.android.gms.internal.zzbbz*/ {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbdj<any>>;
						public constructor();
						public getContext(): globalAndroid.content.Context;
						public constructor(param0: com.google.android.gms.common.api.GoogleApi<any>);
						public getLooper(): globalAndroid.os.Looper;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbdk extends globalAndroid.content.BroadcastReceiver {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbdk>;
						public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
						public constructor();
						public unregister(): void;
						public constructor(param0: any /* com.google.android.gms.internal.zzbdl*/);
						public setContext(param0: globalAndroid.content.Context): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzbdl extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbdl>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbdm extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbdm>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbdn extends java.lang.Object implements globalAndroid.os.IInterface {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbdn>;
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzbdn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zzu(param0: com.google.android.gms.common.api.Status): void;
							asBinder(): globalAndroid.os.IBinder;
						});
						public constructor();
						public asBinder(): globalAndroid.os.IBinder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzbdo extends com.google.android.gms.internal.zzee implements com.google.android.gms.internal.zzbdn {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbdo>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public constructor();
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbdp extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbdp>;
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzbdp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zzd(param0: any /* com.google.android.gms.internal.zzbay<any,any>*/): any /* com.google.android.gms.internal.zzbay<any,any>*/;
							zze(param0: any /* com.google.android.gms.internal.zzbay<any,any>*/): any /* com.google.android.gms.internal.zzbay<any,any>*/;
							connect(): void;
							blockingConnect(): com.google.android.gms.common.ConnectionResult;
							blockingConnect(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
							disconnect(): void;
							getConnectionResult(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
							isConnected(): boolean;
							isConnecting(): boolean;
							zza(param0: any /* com.google.android.gms.internal.zzbei*/): boolean;
							zzpl(): void;
							dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
							zzpE(): void;
						});
						public constructor();
						public disconnect(): void;
						public blockingConnect(): com.google.android.gms.common.ConnectionResult;
						public blockingConnect(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
						public isConnected(): boolean;
						public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
						public connect(): void;
						public isConnecting(): boolean;
						public getConnectionResult(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbdq extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbdq>;
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzbdq interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zzm(param0: globalAndroid.os.Bundle): void;
							zzc(param0: com.google.android.gms.common.ConnectionResult): void;
							zze(param0: number, param1: boolean): void;
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbdr extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbdr>;
						public constructor(param0: globalAndroid.app.Activity);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbds extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbds>;
						public getActivity(): globalAndroid.app.Activity;
						public onDestroy(): void;
						public onResume(): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public constructor(param0: any /* com.google.android.gms.internal.zzbdt*/);
						public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
						public onStop(): void;
						public onStart(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbdt extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbdt>;
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzbdt interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zza(param0: string, param1: java.lang.Class<any>): any /* com.google.android.gms.internal.zzbds*/;
							zza(param0: string, param1: any /* com.google.android.gms.internal.zzbds*/): void;
							startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
							zzqF(): globalAndroid.app.Activity;
						});
						public constructor();
						public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbdu extends globalAndroid.app.Fragment implements com.google.android.gms.internal.zzbdt {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbdu>;
						public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
						public constructor();
						public onResume(): void;
						public startActivityForResult(param0: globalAndroid.content.Intent, param1: number, param2: globalAndroid.os.Bundle): void;
						public onTrimMemory(param0: number): void;
						public onCreateContextMenu(param0: globalAndroid.view.ContextMenu, param1: globalAndroid.view.View, param2: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
						public onStop(): void;
						public onDestroy(): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
						public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public onStart(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbdv extends java.lang.Object implements java.lang.Runnable {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbdv>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbdw<L>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbdw<any>>;
						public clear(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbdx extends globalAndroid.os.Handler {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbdx>;
						public constructor(param0: globalAndroid.os.Looper, param1: globalAndroid.os.Handler.Callback);
						public constructor();
						public constructor(param0: globalAndroid.os.Handler.Callback);
						public constructor(param0: any /* com.google.android.gms.internal.zzbdw<any>*/, param1: globalAndroid.os.Looper);
						public constructor(param0: globalAndroid.os.Looper);
						public handleMessage(param0: globalAndroid.os.Message): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbdy<L>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbdy<any>>;
						public equals(param0: any): boolean;
						public hashCode(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbdz<L>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbdz<any>>;
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzbdz<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zzq(param0: L): void;
							zzpT(): void;
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbea extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbea>;
						public constructor();
						public release(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbec<R>  extends com.google.android.gms.common.api.OptionalPendingResult<any> {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbec<any>>;
						public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>, param1: number, param2: java.util.concurrent.TimeUnit): void;
						public constructor();
						public isDone(): boolean;
						public cancel(): void;
						public isCanceled(): boolean;
						public then(param0: com.google.android.gms.common.api.ResultTransform<any,any>): com.google.android.gms.common.api.TransformedResult<any>;
						public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>): void;
						public await(): any;
						public await(param0: number, param1: java.util.concurrent.TimeUnit): any;
						public constructor(param0: com.google.android.gms.common.api.PendingResult<any>);
						public get(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbed extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbed>;
						public constructor(param0: any /* com.google.android.gms.internal.zzbam*/, param1: number, param2: com.google.android.gms.common.api.GoogleApi<any>);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzbee<A, L>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbee<any,any>>;
						public constructor(param0: any /* com.google.android.gms.internal.zzbdw<L>*/);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbef extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbef>;
						public constructor(param0: any /* com.google.android.gms.internal.zzbee<com.google.android.gms.common.api.Api.zzb,any>*/, param1: any /* com.google.android.gms.internal.zzbey<com.google.android.gms.common.api.Api.zzb,any>*/);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbeg extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbeg>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbeh<R>  extends com.google.android.gms.common.api.PendingResult<any> {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbeh<any>>;
						public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>, param1: number, param2: java.util.concurrent.TimeUnit): void;
						public constructor();
						public cancel(): void;
						public isCanceled(): boolean;
						public then(param0: com.google.android.gms.common.api.ResultTransform<any,any>): com.google.android.gms.common.api.TransformedResult<any>;
						public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>): void;
						public constructor(param0: com.google.android.gms.common.api.Status);
						public await(): any;
						public await(param0: number, param1: java.util.concurrent.TimeUnit): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbei extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbei>;
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzbei interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zzmF(): void;
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbej extends com.google.android.gms.internal.zzctp implements com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbej>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public constructor();
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public onConnected(param0: globalAndroid.os.Bundle): void;
						public onConnectionSuspended(param0: number): void;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler, param2: any /* com.google.android.gms.common.internal.zzq*/, param3: any /* com.google.android.gms.common.api.Api.zza<any,com.google.android.gms.internal.zzctl>*/);
						public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbek extends java.lang.Object implements java.lang.Runnable {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbek>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbel extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbel>;
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzbel interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zzh(param0: com.google.android.gms.common.ConnectionResult): void;
							zzb(param0: any /* com.google.android.gms.common.internal.zzal*/, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbem extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbem>;
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzbem interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zzq(param0: com.google.android.gms.common.api.Status): java.lang.Exception;
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzben extends com.google.android.gms.internal.zzbbe<com.google.android.gms.common.api.Status> {
						public static class: java.lang.Class<com.google.android.gms.internal.zzben>;
						public constructor();
						public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
						/** @deprecated */
						public constructor(param0: globalAndroid.os.Looper);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbep extends java.lang.Object implements java.lang.Runnable {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbep>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzbeq<A, TResult>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbeq<any,any>>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzber extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzber>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbes<R>  extends com.google.android.gms.common.api.TransformedResult<any> implements com.google.android.gms.common.api.ResultCallback<any>  {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbes<any>>;
						public constructor();
						public then(param0: com.google.android.gms.common.api.ResultTransform<any,any>): com.google.android.gms.common.api.TransformedResult<any>;
						public andFinally(param0: com.google.android.gms.common.api.ResultCallbacks<any>): void;
						public onResult(param0: any): void;
						public constructor(param0: java.lang.ref.WeakReference<com.google.android.gms.common.api.GoogleApiClient>);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbet extends java.lang.Object implements java.lang.Runnable {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbet>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbeu extends globalAndroid.os.Handler {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbeu>;
						public constructor(param0: globalAndroid.os.Looper, param1: globalAndroid.os.Handler.Callback);
						public constructor();
						public constructor(param0: globalAndroid.os.Handler.Callback);
						public constructor(param0: any /* com.google.android.gms.internal.zzbes<any>*/, param1: globalAndroid.os.Looper);
						public constructor(param0: globalAndroid.os.Looper);
						public handleMessage(param0: globalAndroid.os.Message): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbev extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbev>;
						public constructor(param0: any /* java.util.Map<com.google.android.gms.common.api.Api.zzc<any>,com.google.android.gms.common.api.Api.zze>*/);
						public release(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbew extends java.lang.Object implements com.google.android.gms.internal.zzbex {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbew>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbex extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbex>;
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzbex interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zzc(param0: any /* com.google.android.gms.internal.zzbbe<any>*/): void;
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzbey<A, L>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbey<any,any>>;
						public constructor(param0: any /* com.google.android.gms.internal.zzbdy<L>*/);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbez<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbez<any>>;
						public constructor(param0: string, param1: T);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbfa extends com.google.android.gms.internal.zzbez<java.lang.Boolean> {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbfa>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbfb extends com.google.android.gms.internal.zzbez<java.lang.Long> {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbfb>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbfc extends com.google.android.gms.internal.zzbez<java.lang.Integer> {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbfc>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbfd extends com.google.android.gms.internal.zzbez<java.lang.Float> {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbfd>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbfe extends java.lang.Object /* com.google.android.gms.internal.zzbez<string>*/ {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbfe>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbff extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbff>;
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzbff interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbfg extends globalAndroid.graphics.drawable.Drawable implements globalAndroid.graphics.drawable.Drawable.Callback {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbfg>;
						public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
						public constructor();
						public getChangingConfigurations(): number;
						public getIntrinsicWidth(): number;
						public getIntrinsicHeight(): number;
						public getConstantState(): globalAndroid.graphics.drawable.Drawable.ConstantState;
						public setColorFilter(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode): void;
						public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						public getOpacity(): number;
						public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.drawable.Drawable);
						public setAlpha(param0: number): void;
						public mutate(): globalAndroid.graphics.drawable.Drawable;
						public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public startTransition(param0: number): void;
						public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
						public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
						public draw(param0: globalAndroid.graphics.Canvas): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbfh extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbfh>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbfi extends globalAndroid.graphics.drawable.Drawable {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbfi>;
						public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public getConstantState(): globalAndroid.graphics.drawable.Drawable.ConstantState;
						public setColorFilter(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode): void;
						public getOpacity(): number;
						public setAlpha(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbfj extends globalAndroid.graphics.drawable.Drawable.ConstantState {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbfj>;
						public newDrawable(param0: globalAndroid.content.res.Resources, param1: globalAndroid.content.res.Resources.Theme): globalAndroid.graphics.drawable.Drawable;
						public getChangingConfigurations(): number;
						public newDrawable(): globalAndroid.graphics.drawable.Drawable;
						public newDrawable(param0: globalAndroid.content.res.Resources): globalAndroid.graphics.drawable.Drawable;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbfk extends globalAndroid.graphics.drawable.Drawable.ConstantState {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbfk>;
						public newDrawable(param0: globalAndroid.content.res.Resources, param1: globalAndroid.content.res.Resources.Theme): globalAndroid.graphics.drawable.Drawable;
						public getChangingConfigurations(): number;
						public newDrawable(): globalAndroid.graphics.drawable.Drawable;
						public newDrawable(param0: globalAndroid.content.res.Resources): globalAndroid.graphics.drawable.Drawable;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbfl extends globalAndroid.widget.ImageView {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbfl>;
						public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
						public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public sendAccessibilityEvent(param0: number): void;
						public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
						public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbfn extends com.google.android.gms.internal.zzbfy {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbfn>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public constructor();
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbfo extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbfo>;
						public static API: com.google.android.gms.common.api.Api<com.google.android.gms.common.api.Api.ApiOptions.NoOptions>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbfp extends com.google.android.gms.common.api.Api.zza<com.google.android.gms.internal.zzbfw,com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbfp>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbfq extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbfq>;
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzbfq interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zzd(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbfr extends java.lang.Object implements com.google.android.gms.internal.zzbfq {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbfr>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbfs extends com.google.android.gms.internal.zzbfv {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbfs>;
						public setResult(param0: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbft extends com.google.android.gms.internal.zzbfn {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbft>;
						public constructor(param0: com.google.android.gms.internal.zzbaz<com.google.android.gms.common.api.Status>);
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public constructor();
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzbfu<R>  extends java.lang.Object /* com.google.android.gms.internal.zzbay<any,com.google.android.gms.internal.zzbfw>*/ {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbfu<any>>;
						public setResult(param0: any): void;
						/** @deprecated */
						public constructor(param0: any /* com.google.android.gms.common.api.Api.zzc<any>*/, param1: com.google.android.gms.common.api.GoogleApiClient);
						public constructor();
						public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
						public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
						/** @deprecated */
						public constructor(param0: globalAndroid.os.Looper);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzbfv extends com.google.android.gms.internal.zzbfu<com.google.android.gms.common.api.Status> {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbfv>;
						public setResult(param0: any): void;
						/** @deprecated */
						public constructor(param0: any /* com.google.android.gms.common.api.Api.zzc<any>*/, param1: com.google.android.gms.common.api.GoogleApiClient);
						public constructor();
						public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
						public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
						/** @deprecated */
						public constructor(param0: globalAndroid.os.Looper);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbfw extends java.lang.Object /* com.google.android.gms.common.internal.zzz<com.google.android.gms.internal.zzbfz>*/ {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbfw>;
						public disconnect(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: any /* com.google.android.gms.common.internal.zzf*/, param4: any /* com.google.android.gms.common.internal.zzg*/, param5: string);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: number, param3: any /* com.google.android.gms.common.internal.zzq*/, param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: any /* com.google.android.gms.common.internal.zzae*/, param3: any /* com.google.android.gms.common.zze*/, param4: number, param5: any /* com.google.android.gms.common.internal.zzf*/, param6: any /* com.google.android.gms.common.internal.zzg*/, param7: string);
						public isConnected(): boolean;
						public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
						public isConnecting(): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Looper, param2: any /* com.google.android.gms.common.internal.zzq*/, param3: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks, param4: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbfx extends java.lang.Object implements globalAndroid.os.IInterface {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbfx>;
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzbfx interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zzaC(param0: number): void;
							asBinder(): globalAndroid.os.IBinder;
						});
						public constructor();
						public asBinder(): globalAndroid.os.IBinder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzbfy extends com.google.android.gms.internal.zzee implements com.google.android.gms.internal.zzbfx {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbfy>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public constructor();
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbfz extends java.lang.Object implements globalAndroid.os.IInterface {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbfz>;
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzbfz interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zza(param0: any /* com.google.android.gms.internal.zzbfx*/): void;
							asBinder(): globalAndroid.os.IBinder;
						});
						public constructor();
						public asBinder(): globalAndroid.os.IBinder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbga extends com.google.android.gms.internal.zzed implements com.google.android.gms.internal.zzbfz {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbga>;
						public asBinder(): globalAndroid.os.IBinder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbgb extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbgb>;
						public constructor(param0: string, param1: native.Array<string>);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbgc extends com.google.android.gms.common.internal.safeparcel.zza {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbgc>;
						public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.zzbgc>*/;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbgd extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.zzbgc>*/ {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbgd>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbge extends java.lang.Object /* com.google.android.gms.common.internal.safeparcel.zza*/ implements com.google.android.gms.internal.zzbgk<string,java.lang.Integer>  {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbge>;
						public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.zzbge>*/;
						public constructor();
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public convertBack(param0: any): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbgf extends com.google.android.gms.common.internal.safeparcel.zza {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbgf>;
						public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.zzbgf>*/;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbgg extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.zzbge>*/ {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbgg>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbgh extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.zzbgf>*/ {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbgh>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzbgi extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbgi>;
						public constructor();
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbgj<I, O>  extends java.lang.Object /* com.google.android.gms.common.internal.safeparcel.zza*/ {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbgj<any,any>>;
						public static CREATOR: any /* com.google.android.gms.internal.zzbgm*/;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public convertBack(param0: any): any;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbgk<I, O>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbgk<any,any>>;
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzbgk<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							convertBack(param0: O): I;
						});
						public constructor();
						public convertBack(param0: O): I;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzbgl extends com.google.android.gms.internal.zzbgi implements com.google.android.gms.common.internal.safeparcel.SafeParcelable {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbgl>;
						public constructor();
						public describeContents(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbgm extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.zzbgj<any,any>>*/ {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbgm>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbgn extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.zzbgq>*/ {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbgn>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbgo extends com.google.android.gms.common.internal.safeparcel.zza {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbgo>;
						public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.zzbgo>*/;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbgp extends com.google.android.gms.common.internal.safeparcel.zza {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbgp>;
						public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.zzbgp>*/;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbgq extends com.google.android.gms.common.internal.safeparcel.zza {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbgq>;
						public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.zzbgq>*/;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbgr extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.zzbgo>*/ {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbgr>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbgs extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.zzbgp>*/ {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbgs>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbgt extends com.google.android.gms.internal.zzbgl {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbgt>;
						public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.zzbgt>*/;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbgu extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.zzbgt>*/ {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbgu>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbgv extends java.lang.Object implements java.util.concurrent.Executor {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbgv>;
						public execute(param0: java.lang.Runnable): void;
						public constructor(param0: globalAndroid.os.Looper);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbgw extends java.lang.Object implements java.util.concurrent.ThreadFactory {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbgw>;
						public newThread(param0: java.lang.Runnable): java.lang.Thread;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbgx extends java.lang.Object implements java.lang.Runnable {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbgx>;
						public run(): void;
						public constructor(param0: java.lang.Runnable, param1: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbgy extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbgy>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbgz extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbgz>;
						public getPackagesForUid(param0: number): native.Array<string>;
						public checkPermission(param0: string, param1: string): number;
						public getPackageInfo(param0: string, param1: number): globalAndroid.content.pm.PackageInfo;
						public constructor(param0: globalAndroid.content.Context);
						public checkCallingOrSelfPermission(param0: string): number;
						public getApplicationInfo(param0: string, param1: number): globalAndroid.content.pm.ApplicationInfo;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbha extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbha>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzbzu<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbzu<any>>;
						public getSource(): number;
						public getKey(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbzv extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbzv>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbzw extends com.google.android.gms.internal.zzbzu<java.lang.Boolean> {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbzw>;
						public constructor(param0: number, param1: string, param2: java.lang.Boolean);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbzx extends com.google.android.gms.internal.zzbzu<java.lang.Integer> {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbzx>;
						public constructor(param0: number, param1: string, param2: java.lang.Integer);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbzy extends com.google.android.gms.internal.zzbzu<java.lang.Long> {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbzy>;
						public constructor(param0: number, param1: string, param2: java.lang.Long);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzbzz extends java.lang.Object /* com.google.android.gms.internal.zzbzu<string>*/ {
						public static class: java.lang.Class<com.google.android.gms.internal.zzbzz>;
						public constructor(param0: number, param1: string, param2: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzc extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzc>;
						public data: native.Array<number>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzcaa extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzcaa>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzcab extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzcab>;
						public constructor();
						public initialize(param0: globalAndroid.content.Context): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzcac extends java.lang.Object implements globalAndroid.os.IInterface {
						public static class: java.lang.Class<com.google.android.gms.internal.zzcac>;
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzcac interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							init(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
							getBooleanFlagValue(param0: string, param1: boolean, param2: number): boolean;
							getIntFlagValue(param0: string, param1: number, param2: number): number;
							getLongFlagValue(param0: string, param1: number, param2: number): number;
							getStringFlagValue(param0: string, param1: string, param2: number): string;
							asBinder(): globalAndroid.os.IBinder;
						});
						public constructor();
						public init(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
						public getBooleanFlagValue(param0: string, param1: boolean, param2: number): boolean;
						public getStringFlagValue(param0: string, param1: string, param2: number): string;
						public getLongFlagValue(param0: string, param1: number, param2: number): number;
						public asBinder(): globalAndroid.os.IBinder;
						public getIntFlagValue(param0: string, param1: number, param2: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzcad extends com.google.android.gms.internal.zzee implements com.google.android.gms.internal.zzcac {
						public static class: java.lang.Class<com.google.android.gms.internal.zzcad>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public constructor();
						public static asInterface(param0: globalAndroid.os.IBinder): any /* com.google.android.gms.internal.zzcac*/;
						public init(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public getLongFlagValue(param0: string, param1: number, param2: number): number;
						public getIntFlagValue(param0: string, param1: number, param2: number): number;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public getBooleanFlagValue(param0: string, param1: boolean, param2: number): boolean;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public getStringFlagValue(param0: string, param1: string, param2: number): string;
						public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzcae extends com.google.android.gms.internal.zzed implements com.google.android.gms.internal.zzcac {
						public static class: java.lang.Class<com.google.android.gms.internal.zzcae>;
						public init(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
						public getBooleanFlagValue(param0: string, param1: boolean, param2: number): boolean;
						public getStringFlagValue(param0: string, param1: string, param2: number): string;
						public getLongFlagValue(param0: string, param1: number, param2: number): number;
						public asBinder(): globalAndroid.os.IBinder;
						public getIntFlagValue(param0: string, param1: number, param2: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzcaf extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzcaf>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzcag extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzcag>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzcqn extends com.google.android.gms.common.internal.safeparcel.zza {
						public static class: java.lang.Class<com.google.android.gms.internal.zzcqn>;
						public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.zzcqn>*/;
						public constructor();
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public equals(param0: any): boolean;
						public constructor(param0: string, param1: native.Array<number>, param2: native.Array<native.Array<number>>, param3: native.Array<native.Array<number>>, param4: native.Array<native.Array<number>>, param5: native.Array<native.Array<number>>, param6: native.Array<number>, param7: native.Array<native.Array<number>>);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzcqo extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzcqo>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzcqp extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzcqp>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzcqq extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzcqq>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzcqr extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzcqr>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzcqs extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzcqs>;
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzcqs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzcqt extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.zzcqn>*/ {
						public static class: java.lang.Class<com.google.android.gms.internal.zzcqt>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzcqu extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzcqu>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzctg extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzctg>;
						public static API: any /* com.google.android.gms.common.api.Api<com.google.android.gms.internal.zzctl>*/;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzcth extends java.lang.Object /* com.google.android.gms.common.api.Api.zza<com.google.android.gms.internal.zzctu,com.google.android.gms.internal.zzctl>*/ {
						public static class: java.lang.Class<com.google.android.gms.internal.zzcth>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzcti extends java.lang.Object /* com.google.android.gms.common.api.Api.zza<com.google.android.gms.internal.zzctu,com.google.android.gms.internal.zzctj>*/ {
						public static class: java.lang.Class<com.google.android.gms.internal.zzcti>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzctj extends java.lang.Object implements com.google.android.gms.common.api.Api.ApiOptions.HasOptions {
						public static class: java.lang.Class<com.google.android.gms.internal.zzctj>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzctk extends java.lang.Object implements com.google.android.gms.common.api.Api.zze {
						public static class: java.lang.Class<com.google.android.gms.internal.zzctk>;
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzctk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zza(param0: any /* com.google.android.gms.internal.zzctq*/): void;
							zza(param0: any /* com.google.android.gms.common.internal.zzal*/, param1: boolean): void;
							zzAq(): void;
							connect(): void;
							zza(param0: any /* com.google.android.gms.common.internal.zzj*/): void;
							disconnect(): void;
							isConnected(): boolean;
							isConnecting(): boolean;
							zza(param0: any /* com.google.android.gms.common.internal.zzal*/, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
							zzmv(): boolean;
							zzpe(): boolean;
							zzmG(): boolean;
							zzmH(): globalAndroid.content.Intent;
							dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
						});
						public constructor();
						public disconnect(): void;
						public isConnected(): boolean;
						public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
						public connect(): void;
						public isConnecting(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzctl extends java.lang.Object implements com.google.android.gms.common.api.Api.ApiOptions.Optional {
						public static class: java.lang.Class<com.google.android.gms.internal.zzctl>;
						public isIdTokenRequested(): boolean;
						public getServerClientId(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzctm extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzctm>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzctn extends com.google.android.gms.common.internal.safeparcel.zza implements com.google.android.gms.common.api.Result {
						public static class: java.lang.Class<com.google.android.gms.internal.zzctn>;
						public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.zzctn>*/;
						public constructor();
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getStatus(): com.google.android.gms.common.api.Status;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzcto extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.zzctn>*/ {
						public static class: java.lang.Class<com.google.android.gms.internal.zzcto>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzctp extends com.google.android.gms.internal.zzctr {
						public static class: java.lang.Class<com.google.android.gms.internal.zzctp>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public constructor();
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzctq extends java.lang.Object implements globalAndroid.os.IInterface {
						public static class: java.lang.Class<com.google.android.gms.internal.zzctq>;
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzctq interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zzb(param0: any /* com.google.android.gms.internal.zzctx*/): void;
							asBinder(): globalAndroid.os.IBinder;
						});
						public constructor();
						public asBinder(): globalAndroid.os.IBinder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzctr extends com.google.android.gms.internal.zzee implements com.google.android.gms.internal.zzctq {
						public static class: java.lang.Class<com.google.android.gms.internal.zzctr>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public constructor();
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzcts extends java.lang.Object implements globalAndroid.os.IInterface {
						public static class: java.lang.Class<com.google.android.gms.internal.zzcts>;
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzcts interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zzbv(param0: number): void;
							zza(param0: any /* com.google.android.gms.common.internal.zzal*/, param1: number, param2: boolean): void;
							zza(param0: any /* com.google.android.gms.internal.zzctv*/, param1: any /* com.google.android.gms.internal.zzctq*/): void;
							asBinder(): globalAndroid.os.IBinder;
						});
						public constructor();
						public asBinder(): globalAndroid.os.IBinder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzctt extends com.google.android.gms.internal.zzed implements com.google.android.gms.internal.zzcts {
						public static class: java.lang.Class<com.google.android.gms.internal.zzctt>;
						public asBinder(): globalAndroid.os.IBinder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzctv extends com.google.android.gms.common.internal.safeparcel.zza {
						public static class: java.lang.Class<com.google.android.gms.internal.zzctv>;
						public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.zzctv>*/;
						public constructor();
						public constructor(param0: any /* com.google.android.gms.common.internal.zzbp*/);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzctw extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.zzctv>*/ {
						public static class: java.lang.Class<com.google.android.gms.internal.zzctw>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzctx extends com.google.android.gms.common.internal.safeparcel.zza {
						public static class: java.lang.Class<com.google.android.gms.internal.zzctx>;
						public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.zzctx>*/;
						public constructor();
						public constructor(param0: number);
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzcty extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.zzctx>*/ {
						public static class: java.lang.Class<com.google.android.gms.internal.zzcty>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzctz extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzctz>;
						public acquire(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: number, param2: string);
						public isHeld(): boolean;
						public release(): void;
						public setReferenceCounted(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzd extends java.lang.Thread {
						public static class: java.lang.Class<com.google.android.gms.internal.zzd>;
						public constructor(param0: java.lang.ThreadGroup, param1: java.lang.Runnable, param2: string, param3: number);
						public constructor(param0: java.lang.ThreadGroup, param1: java.lang.Runnable, param2: string);
						public constructor();
						public run(): void;
						public constructor(param0: java.lang.ThreadGroup, param1: java.lang.Runnable);
						public constructor(param0: java.lang.ThreadGroup, param1: string);
						public constructor(param0: any /* java.util.concurrent.BlockingQueue<com.google.android.gms.internal.zzp<any>>*/, param1: any /* java.util.concurrent.BlockingQueue<com.google.android.gms.internal.zzp<any>>*/, param2: any /* com.google.android.gms.internal.zzb*/, param3: any /* com.google.android.gms.internal.zzw*/);
						public constructor(param0: java.lang.Runnable);
						public quit(): void;
						public constructor(param0: java.lang.Runnable, param1: string);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zze extends java.lang.Object implements java.lang.Runnable {
						public static class: java.lang.Class<com.google.android.gms.internal.zze>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzed extends java.lang.Object implements globalAndroid.os.IInterface {
						public static class: java.lang.Class<com.google.android.gms.internal.zzed>;
						public constructor(param0: globalAndroid.os.IBinder, param1: string);
						public asBinder(): globalAndroid.os.IBinder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzee extends globalAndroid.os.Binder implements globalAndroid.os.IInterface {
						public static class: java.lang.Class<com.google.android.gms.internal.zzee>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public constructor();
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzef extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzef>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzf extends com.google.android.gms.internal.zzy {
						public static class: java.lang.Class<com.google.android.gms.internal.zzf>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: any /* com.google.android.gms.internal.zzn*/);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzfd extends java.lang.Object implements globalAndroid.os.IInterface {
						public static class: java.lang.Class<com.google.android.gms.internal.zzfd>;
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzfd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getId(): string;
							zzb(param0: boolean): boolean;
							zzq(param0: string): string;
							zzc(param0: string, param1: boolean): void;
							asBinder(): globalAndroid.os.IBinder;
						});
						public constructor();
						public getId(): string;
						public asBinder(): globalAndroid.os.IBinder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzfe extends com.google.android.gms.internal.zzee implements com.google.android.gms.internal.zzfd {
						public static class: java.lang.Class<com.google.android.gms.internal.zzfe>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public getId(): string;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzff extends com.google.android.gms.internal.zzed implements com.google.android.gms.internal.zzfd {
						public static class: java.lang.Class<com.google.android.gms.internal.zzff>;
						public getId(): string;
						public asBinder(): globalAndroid.os.IBinder;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzg extends java.lang.Object implements com.google.android.gms.internal.zzx {
						public static class: java.lang.Class<com.google.android.gms.internal.zzg>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzh extends java.lang.Object implements com.google.android.gms.internal.zzw {
						public static class: java.lang.Class<com.google.android.gms.internal.zzh>;
						public constructor(param0: globalAndroid.os.Handler);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzi extends java.lang.Object implements java.util.concurrent.Executor {
						public static class: java.lang.Class<com.google.android.gms.internal.zzi>;
						public execute(param0: java.lang.Runnable): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzj extends java.lang.Object implements java.lang.Runnable {
						public static class: java.lang.Class<com.google.android.gms.internal.zzj>;
						public run(): void;
						public constructor(param0: any /* com.google.android.gms.internal.zzh*/, param1: any /* com.google.android.gms.internal.zzp<any>*/, param2: any /* com.google.android.gms.internal.zzt<any>*/, param3: java.lang.Runnable);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzk extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzk>;
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zza(param0: any /* com.google.android.gms.internal.zzp<any>*/): any /* com.google.android.gms.internal.zzn*/;
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzl extends java.lang.Thread {
						public static class: java.lang.Class<com.google.android.gms.internal.zzl>;
						public constructor(param0: java.lang.ThreadGroup, param1: java.lang.Runnable, param2: string, param3: number);
						public constructor(param0: java.lang.ThreadGroup, param1: java.lang.Runnable, param2: string);
						public constructor();
						public run(): void;
						public constructor(param0: java.lang.ThreadGroup, param1: java.lang.Runnable);
						public constructor(param0: any /* java.util.concurrent.BlockingQueue<com.google.android.gms.internal.zzp<any>>*/, param1: any /* com.google.android.gms.internal.zzk*/, param2: any /* com.google.android.gms.internal.zzb*/, param3: any /* com.google.android.gms.internal.zzw*/);
						public constructor(param0: java.lang.ThreadGroup, param1: string);
						public constructor(param0: java.lang.Runnable);
						public quit(): void;
						public constructor(param0: java.lang.Runnable, param1: string);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzm extends com.google.android.gms.internal.zzaa {
						public static class: java.lang.Class<com.google.android.gms.internal.zzm>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: any /* com.google.android.gms.internal.zzn*/);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzn extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzn>;
						public data: native.Array<number>;
						public constructor(param0: native.Array<number>, param1: java.util.Map<string,string>);
						public constructor(param0: number, param1: native.Array<number>, param2: java.util.Map<string,string>, param3: boolean, param4: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzo extends com.google.android.gms.internal.zzm {
						public static class: java.lang.Class<com.google.android.gms.internal.zzo>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: any /* com.google.android.gms.internal.zzn*/);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export abstract class zzp<T>  extends java.lang.Object /* java.lang.Comparable<com.google.android.gms.internal.zzp<any>>*/ {
						public static class: java.lang.Class<com.google.android.gms.internal.zzp<any>>;
						public getHeaders(): java.util.Map<string,string>;
						public getUrl(): string;
						public constructor(param0: number, param1: string, param2: any /* com.google.android.gms.internal.zzu*/);
						public getMethod(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzq extends java.lang.Object implements java.lang.Runnable {
						public static class: java.lang.Class<com.google.android.gms.internal.zzq>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzr {
						public static class: java.lang.Class<com.google.android.gms.internal.zzr>;
						public static values(): any /* native.Array<com.google.android.gms.internal.zzr>*/;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzs extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzs>;
						public start(): void;
						public constructor(param0: any /* com.google.android.gms.internal.zzb*/, param1: any /* com.google.android.gms.internal.zzk*/);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzt<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzt<any>>;
						public result: T;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzu extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzu>;
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzu interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zzd(param0: any /* com.google.android.gms.internal.zzaa*/): void;
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzv<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzv<any>>;
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzv<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zzb(param0: T): void;
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzw extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzw>;
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzw interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zza(param0: any /* com.google.android.gms.internal.zzp<any>*/, param1: any /* com.google.android.gms.internal.zzt<any>*/): void;
							zza(param0: any /* com.google.android.gms.internal.zzp<any>*/, param1: any /* com.google.android.gms.internal.zzt<any>*/, param2: java.lang.Runnable): void;
							zza(param0: any /* com.google.android.gms.internal.zzp<any>*/, param1: any /* com.google.android.gms.internal.zzaa*/): void;
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzx extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.internal.zzx>;
						/**
						 * Constructs a new instance of the com.google.android.gms.internal.zzx interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zza(): number;
							zzb(): number;
							zza(param0: any /* com.google.android.gms.internal.zzaa*/): void;
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzy extends com.google.android.gms.internal.zzaa {
						public static class: java.lang.Class<com.google.android.gms.internal.zzy>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: any /* com.google.android.gms.internal.zzn*/);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export class zzz extends com.google.android.gms.internal.zzaa {
						public static class: java.lang.Class<com.google.android.gms.internal.zzz>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: any /* com.google.android.gms.internal.zzn*/);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export module places {
						export class PlaceReport extends com.google.android.gms.common.internal.safeparcel.zza implements com.google.android.gms.common.internal.ReflectedParcelable {
							public static class: java.lang.Class<com.google.android.gms.location.places.PlaceReport>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.places.PlaceReport>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public static create(param0: string, param1: string): com.google.android.gms.location.places.PlaceReport;
							public describeContents(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public getTag(): string;
							public getPlaceId(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module location {
					export module places {
						export class zzl extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.location.places.PlaceReport> {
							public static class: java.lang.Class<com.google.android.gms.location.places.zzl>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class CameraUpdate extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.maps.CameraUpdate>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class CameraUpdateFactory extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.maps.CameraUpdateFactory>;
						public static zoomOut(): com.google.android.gms.maps.CameraUpdate;
						public static newLatLng(param0: com.google.android.gms.maps.model.LatLng): com.google.android.gms.maps.CameraUpdate;
						public static zoomTo(param0: number): com.google.android.gms.maps.CameraUpdate;
						public static scrollBy(param0: number, param1: number): com.google.android.gms.maps.CameraUpdate;
						public static newLatLngZoom(param0: com.google.android.gms.maps.model.LatLng, param1: number): com.google.android.gms.maps.CameraUpdate;
						public static zoomBy(param0: number): com.google.android.gms.maps.CameraUpdate;
						public static newLatLngBounds(param0: com.google.android.gms.maps.model.LatLngBounds, param1: number): com.google.android.gms.maps.CameraUpdate;
						public static zoomIn(): com.google.android.gms.maps.CameraUpdate;
						public static newLatLngBounds(param0: com.google.android.gms.maps.model.LatLngBounds, param1: number, param2: number, param3: number): com.google.android.gms.maps.CameraUpdate;
						public static zoomBy(param0: number, param1: globalAndroid.graphics.Point): com.google.android.gms.maps.CameraUpdate;
						public static newCameraPosition(param0: com.google.android.gms.maps.model.CameraPosition): com.google.android.gms.maps.CameraUpdate;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class GoogleMap extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap>;
						public static MAP_TYPE_NONE: number;
						public static MAP_TYPE_NORMAL: number;
						public static MAP_TYPE_SATELLITE: number;
						public static MAP_TYPE_TERRAIN: number;
						public static MAP_TYPE_HYBRID: number;
						public isIndoorEnabled(): boolean;
						public snapshot(param0: com.google.android.gms.maps.GoogleMap.SnapshotReadyCallback, param1: globalAndroid.graphics.Bitmap): void;
						public moveCamera(param0: com.google.android.gms.maps.CameraUpdate): void;
						public addTileOverlay(param0: com.google.android.gms.maps.model.TileOverlayOptions): com.google.android.gms.maps.model.TileOverlay;
						public setOnGroundOverlayClickListener(param0: com.google.android.gms.maps.GoogleMap.OnGroundOverlayClickListener): void;
						public setTrafficEnabled(param0: boolean): void;
						public setOnIndoorStateChangeListener(param0: com.google.android.gms.maps.GoogleMap.OnIndoorStateChangeListener): void;
						public setOnMyLocationButtonClickListener(param0: com.google.android.gms.maps.GoogleMap.OnMyLocationButtonClickListener): void;
						public addMarker(param0: com.google.android.gms.maps.model.MarkerOptions): com.google.android.gms.maps.model.Marker;
						public isBuildingsEnabled(): boolean;
						public setOnCircleClickListener(param0: com.google.android.gms.maps.GoogleMap.OnCircleClickListener): void;
						public setOnMapClickListener(param0: com.google.android.gms.maps.GoogleMap.OnMapClickListener): void;
						public setOnCameraIdleListener(param0: com.google.android.gms.maps.GoogleMap.OnCameraIdleListener): void;
						public setOnCameraMoveCanceledListener(param0: com.google.android.gms.maps.GoogleMap.OnCameraMoveCanceledListener): void;
						public setOnInfoWindowCloseListener(param0: com.google.android.gms.maps.GoogleMap.OnInfoWindowCloseListener): void;
						/** @deprecated */
						public setOnCameraChangeListener(param0: com.google.android.gms.maps.GoogleMap.OnCameraChangeListener): void;
						public setOnCameraMoveListener(param0: com.google.android.gms.maps.GoogleMap.OnCameraMoveListener): void;
						public setMaxZoomPreference(param0: number): void;
						public constructor(param0: com.google.android.gms.maps.internal.IGoogleMapDelegate);
						public animateCamera(param0: com.google.android.gms.maps.CameraUpdate, param1: com.google.android.gms.maps.GoogleMap.CancelableCallback): void;
						/** @deprecated */
						public getMyLocation(): globalAndroid.location.Location;
						public setOnMapLongClickListener(param0: com.google.android.gms.maps.GoogleMap.OnMapLongClickListener): void;
						public setIndoorEnabled(param0: boolean): boolean;
						public getProjection(): com.google.android.gms.maps.Projection;
						public setOnMapLoadedCallback(param0: com.google.android.gms.maps.GoogleMap.OnMapLoadedCallback): void;
						public isMyLocationEnabled(): boolean;
						public addPolygon(param0: com.google.android.gms.maps.model.PolygonOptions): com.google.android.gms.maps.model.Polygon;
						public setBuildingsEnabled(param0: boolean): void;
						public setOnInfoWindowClickListener(param0: com.google.android.gms.maps.GoogleMap.OnInfoWindowClickListener): void;
						public getCameraPosition(): com.google.android.gms.maps.model.CameraPosition;
						public getUiSettings(): com.google.android.gms.maps.UiSettings;
						public getMinZoomLevel(): number;
						public setMapStyle(param0: com.google.android.gms.maps.model.MapStyleOptions): boolean;
						/** @deprecated */
						public setOnMyLocationChangeListener(param0: com.google.android.gms.maps.GoogleMap.OnMyLocationChangeListener): void;
						public setOnPolygonClickListener(param0: com.google.android.gms.maps.GoogleMap.OnPolygonClickListener): void;
						public setContentDescription(param0: string): void;
						public clear(): void;
						public setPadding(param0: number, param1: number, param2: number, param3: number): void;
						public addPolyline(param0: com.google.android.gms.maps.model.PolylineOptions): com.google.android.gms.maps.model.Polyline;
						public resetMinMaxZoomPreference(): void;
						public setOnMarkerDragListener(param0: com.google.android.gms.maps.GoogleMap.OnMarkerDragListener): void;
						public addCircle(param0: com.google.android.gms.maps.model.CircleOptions): com.google.android.gms.maps.model.Circle;
						public setOnCameraMoveStartedListener(param0: com.google.android.gms.maps.GoogleMap.OnCameraMoveStartedListener): void;
						public setOnPoiClickListener(param0: com.google.android.gms.maps.GoogleMap.OnPoiClickListener): void;
						public setLocationSource(param0: com.google.android.gms.maps.LocationSource): void;
						public getMaxZoomLevel(): number;
						public setLatLngBoundsForCameraTarget(param0: com.google.android.gms.maps.model.LatLngBounds): void;
						public stopAnimation(): void;
						public setMapType(param0: number): void;
						public isTrafficEnabled(): boolean;
						public setOnInfoWindowLongClickListener(param0: com.google.android.gms.maps.GoogleMap.OnInfoWindowLongClickListener): void;
						public setMyLocationEnabled(param0: boolean): void;
						public setOnMarkerClickListener(param0: com.google.android.gms.maps.GoogleMap.OnMarkerClickListener): void;
						public getMapType(): number;
						public setOnPolylineClickListener(param0: com.google.android.gms.maps.GoogleMap.OnPolylineClickListener): void;
						public getFocusedBuilding(): com.google.android.gms.maps.model.IndoorBuilding;
						public animateCamera(param0: com.google.android.gms.maps.CameraUpdate): void;
						public addGroundOverlay(param0: com.google.android.gms.maps.model.GroundOverlayOptions): com.google.android.gms.maps.model.GroundOverlay;
						public setMinZoomPreference(param0: number): void;
						public snapshot(param0: com.google.android.gms.maps.GoogleMap.SnapshotReadyCallback): void;
						public animateCamera(param0: com.google.android.gms.maps.CameraUpdate, param1: number, param2: com.google.android.gms.maps.GoogleMap.CancelableCallback): void;
						public setInfoWindowAdapter(param0: com.google.android.gms.maps.GoogleMap.InfoWindowAdapter): void;
					}
					export module GoogleMap {
						export class CancelableCallback extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.CancelableCallback>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$CancelableCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onFinish(): void;
								onCancel(): void;
							});
							public constructor();
							public onFinish(): void;
							public onCancel(): void;
						}
						export class InfoWindowAdapter extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.InfoWindowAdapter>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$InfoWindowAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getInfoWindow(param0: com.google.android.gms.maps.model.Marker): globalAndroid.view.View;
								getInfoContents(param0: com.google.android.gms.maps.model.Marker): globalAndroid.view.View;
							});
							public constructor();
							public getInfoContents(param0: com.google.android.gms.maps.model.Marker): globalAndroid.view.View;
							public getInfoWindow(param0: com.google.android.gms.maps.model.Marker): globalAndroid.view.View;
						}
						export class OnCameraChangeListener extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnCameraChangeListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnCameraChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onCameraChange(param0: com.google.android.gms.maps.model.CameraPosition): void;
							});
							public constructor();
							public onCameraChange(param0: com.google.android.gms.maps.model.CameraPosition): void;
						}
						export class OnCameraIdleListener extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnCameraIdleListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnCameraIdleListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onCameraIdle(): void;
							});
							public constructor();
							public onCameraIdle(): void;
						}
						export class OnCameraMoveCanceledListener extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnCameraMoveCanceledListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnCameraMoveCanceledListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onCameraMoveCanceled(): void;
							});
							public constructor();
							public onCameraMoveCanceled(): void;
						}
						export class OnCameraMoveListener extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnCameraMoveListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnCameraMoveListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onCameraMove(): void;
							});
							public constructor();
							public onCameraMove(): void;
						}
						export class OnCameraMoveStartedListener extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnCameraMoveStartedListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnCameraMoveStartedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onCameraMoveStarted(param0: number): void;
							});
							public constructor();
							public static REASON_DEVELOPER_ANIMATION: number;
							public static REASON_API_ANIMATION: number;
							public static REASON_GESTURE: number;
							public onCameraMoveStarted(param0: number): void;
						}
						export class OnCircleClickListener extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnCircleClickListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnCircleClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onCircleClick(param0: com.google.android.gms.maps.model.Circle): void;
							});
							public constructor();
							public onCircleClick(param0: com.google.android.gms.maps.model.Circle): void;
						}
						export class OnGroundOverlayClickListener extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnGroundOverlayClickListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnGroundOverlayClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onGroundOverlayClick(param0: com.google.android.gms.maps.model.GroundOverlay): void;
							});
							public constructor();
							public onGroundOverlayClick(param0: com.google.android.gms.maps.model.GroundOverlay): void;
						}
						export class OnIndoorStateChangeListener extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnIndoorStateChangeListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnIndoorStateChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onIndoorBuildingFocused(): void;
								onIndoorLevelActivated(param0: com.google.android.gms.maps.model.IndoorBuilding): void;
							});
							public constructor();
							public onIndoorLevelActivated(param0: com.google.android.gms.maps.model.IndoorBuilding): void;
							public onIndoorBuildingFocused(): void;
						}
						export class OnInfoWindowClickListener extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnInfoWindowClickListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnInfoWindowClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onInfoWindowClick(param0: com.google.android.gms.maps.model.Marker): void;
							});
							public constructor();
							public onInfoWindowClick(param0: com.google.android.gms.maps.model.Marker): void;
						}
						export class OnInfoWindowCloseListener extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnInfoWindowCloseListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnInfoWindowCloseListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onInfoWindowClose(param0: com.google.android.gms.maps.model.Marker): void;
							});
							public constructor();
							public onInfoWindowClose(param0: com.google.android.gms.maps.model.Marker): void;
						}
						export class OnInfoWindowLongClickListener extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnInfoWindowLongClickListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnInfoWindowLongClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onInfoWindowLongClick(param0: com.google.android.gms.maps.model.Marker): void;
							});
							public constructor();
							public onInfoWindowLongClick(param0: com.google.android.gms.maps.model.Marker): void;
						}
						export class OnMapClickListener extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnMapClickListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnMapClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onMapClick(param0: com.google.android.gms.maps.model.LatLng): void;
							});
							public constructor();
							public onMapClick(param0: com.google.android.gms.maps.model.LatLng): void;
						}
						export class OnMapLoadedCallback extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnMapLoadedCallback>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnMapLoadedCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onMapLoaded(): void;
							});
							public constructor();
							public onMapLoaded(): void;
						}
						export class OnMapLongClickListener extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnMapLongClickListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnMapLongClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onMapLongClick(param0: com.google.android.gms.maps.model.LatLng): void;
							});
							public constructor();
							public onMapLongClick(param0: com.google.android.gms.maps.model.LatLng): void;
						}
						export class OnMarkerClickListener extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnMarkerClickListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnMarkerClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onMarkerClick(param0: com.google.android.gms.maps.model.Marker): boolean;
							});
							public constructor();
							public onMarkerClick(param0: com.google.android.gms.maps.model.Marker): boolean;
						}
						export class OnMarkerDragListener extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnMarkerDragListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnMarkerDragListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onMarkerDragStart(param0: com.google.android.gms.maps.model.Marker): void;
								onMarkerDrag(param0: com.google.android.gms.maps.model.Marker): void;
								onMarkerDragEnd(param0: com.google.android.gms.maps.model.Marker): void;
							});
							public constructor();
							public onMarkerDragStart(param0: com.google.android.gms.maps.model.Marker): void;
							public onMarkerDragEnd(param0: com.google.android.gms.maps.model.Marker): void;
							public onMarkerDrag(param0: com.google.android.gms.maps.model.Marker): void;
						}
						export class OnMyLocationButtonClickListener extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnMyLocationButtonClickListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnMyLocationButtonClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onMyLocationButtonClick(): boolean;
							});
							public constructor();
							public onMyLocationButtonClick(): boolean;
						}
						export class OnMyLocationChangeListener extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnMyLocationChangeListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnMyLocationChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onMyLocationChange(param0: globalAndroid.location.Location): void;
							});
							public constructor();
							public onMyLocationChange(param0: globalAndroid.location.Location): void;
						}
						export class OnPoiClickListener extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnPoiClickListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnPoiClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onPoiClick(param0: com.google.android.gms.maps.model.PointOfInterest): void;
							});
							public constructor();
							public onPoiClick(param0: com.google.android.gms.maps.model.PointOfInterest): void;
						}
						export class OnPolygonClickListener extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnPolygonClickListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnPolygonClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onPolygonClick(param0: com.google.android.gms.maps.model.Polygon): void;
							});
							public constructor();
							public onPolygonClick(param0: com.google.android.gms.maps.model.Polygon): void;
						}
						export class OnPolylineClickListener extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.OnPolylineClickListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$OnPolylineClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onPolylineClick(param0: com.google.android.gms.maps.model.Polyline): void;
							});
							public constructor();
							public onPolylineClick(param0: com.google.android.gms.maps.model.Polyline): void;
						}
						export class SnapshotReadyCallback extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.SnapshotReadyCallback>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.GoogleMap$SnapshotReadyCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onSnapshotReady(param0: globalAndroid.graphics.Bitmap): void;
							});
							public constructor();
							public onSnapshotReady(param0: globalAndroid.graphics.Bitmap): void;
						}
						export class zza extends com.google.android.gms.maps.internal.zzd {
							public static class: java.lang.Class<com.google.android.gms.maps.GoogleMap.zza>;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public pingBinder(): boolean;
							public onFinish(): void;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public onCancel(): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class GoogleMapOptions extends com.google.android.gms.common.internal.safeparcel.zza implements com.google.android.gms.common.internal.ReflectedParcelable {
						public static class: java.lang.Class<com.google.android.gms.maps.GoogleMapOptions>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.GoogleMapOptions>;
						public minZoomPreference(param0: number): com.google.android.gms.maps.GoogleMapOptions;
						public getLatLngBoundsForCameraTarget(): com.google.android.gms.maps.model.LatLngBounds;
						public getZOrderOnTop(): java.lang.Boolean;
						public getCamera(): com.google.android.gms.maps.model.CameraPosition;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getLiteMode(): java.lang.Boolean;
						public camera(param0: com.google.android.gms.maps.model.CameraPosition): com.google.android.gms.maps.GoogleMapOptions;
						public getAmbientEnabled(): java.lang.Boolean;
						public tiltGesturesEnabled(param0: boolean): com.google.android.gms.maps.GoogleMapOptions;
						public compassEnabled(param0: boolean): com.google.android.gms.maps.GoogleMapOptions;
						public scrollGesturesEnabled(param0: boolean): com.google.android.gms.maps.GoogleMapOptions;
						public zOrderOnTop(param0: boolean): com.google.android.gms.maps.GoogleMapOptions;
						public maxZoomPreference(param0: number): com.google.android.gms.maps.GoogleMapOptions;
						public getMinZoomPreference(): java.lang.Float;
						public liteMode(param0: boolean): com.google.android.gms.maps.GoogleMapOptions;
						public getScrollGesturesEnabled(): java.lang.Boolean;
						public useViewLifecycleInFragment(param0: boolean): com.google.android.gms.maps.GoogleMapOptions;
						public getMapToolbarEnabled(): java.lang.Boolean;
						public constructor();
						public mapType(param0: number): com.google.android.gms.maps.GoogleMapOptions;
						public describeContents(): number;
						public zoomGesturesEnabled(param0: boolean): com.google.android.gms.maps.GoogleMapOptions;
						public ambientEnabled(param0: boolean): com.google.android.gms.maps.GoogleMapOptions;
						public static createFromAttributes(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): com.google.android.gms.maps.GoogleMapOptions;
						public getZoomGesturesEnabled(): java.lang.Boolean;
						public getMapType(): number;
						public getRotateGesturesEnabled(): java.lang.Boolean;
						public getMaxZoomPreference(): java.lang.Float;
						public zoomControlsEnabled(param0: boolean): com.google.android.gms.maps.GoogleMapOptions;
						public getUseViewLifecycleInFragment(): java.lang.Boolean;
						public toString(): string;
						public rotateGesturesEnabled(param0: boolean): com.google.android.gms.maps.GoogleMapOptions;
						public getTiltGesturesEnabled(): java.lang.Boolean;
						public latLngBoundsForCameraTarget(param0: com.google.android.gms.maps.model.LatLngBounds): com.google.android.gms.maps.GoogleMapOptions;
						public getCompassEnabled(): java.lang.Boolean;
						public getZoomControlsEnabled(): java.lang.Boolean;
						public mapToolbarEnabled(param0: boolean): com.google.android.gms.maps.GoogleMapOptions;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class LocationSource extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.maps.LocationSource>;
						/**
						 * Constructs a new instance of the com.google.android.gms.maps.LocationSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							activate(param0: com.google.android.gms.maps.LocationSource.OnLocationChangedListener): void;
							deactivate(): void;
						});
						public constructor();
						public activate(param0: com.google.android.gms.maps.LocationSource.OnLocationChangedListener): void;
						public deactivate(): void;
					}
					export module LocationSource {
						export class OnLocationChangedListener extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.LocationSource.OnLocationChangedListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.LocationSource$OnLocationChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onLocationChanged(param0: globalAndroid.location.Location): void;
							});
							public constructor();
							public onLocationChanged(param0: globalAndroid.location.Location): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class MapFragment extends globalAndroid.app.Fragment {
						public static class: java.lang.Class<com.google.android.gms.maps.MapFragment>;
						public static newInstance(): com.google.android.gms.maps.MapFragment;
						public onTrimMemory(param0: number): void;
						public setArguments(param0: globalAndroid.os.Bundle): void;
						public onEnterAmbient(param0: globalAndroid.os.Bundle): void;
						public onInflate(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: globalAndroid.os.Bundle): void;
						/** @deprecated */
						public onInflate(param0: globalAndroid.app.Activity, param1: globalAndroid.util.AttributeSet, param2: globalAndroid.os.Bundle): void;
						public onLowMemory(): void;
						public onPause(): void;
						public onDestroyView(): void;
						public onDestroy(): void;
						public onAttach(param0: globalAndroid.content.Context): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public constructor();
						public onActivityCreated(param0: globalAndroid.os.Bundle): void;
						public getMapAsync(param0: com.google.android.gms.maps.OnMapReadyCallback): void;
						/** @deprecated */
						public onAttach(param0: globalAndroid.app.Activity): void;
						public static newInstance(param0: com.google.android.gms.maps.GoogleMapOptions): com.google.android.gms.maps.MapFragment;
						public onResume(): void;
						public onCreateContextMenu(param0: globalAndroid.view.ContextMenu, param1: globalAndroid.view.View, param2: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
						/** @deprecated */
						public onInflate(param0: globalAndroid.util.AttributeSet, param1: globalAndroid.os.Bundle): void;
						public onStop(): void;
						public onExitAmbient(): void;
						public onInflate(param0: globalAndroid.app.Activity, param1: globalAndroid.util.AttributeSet, param2: globalAndroid.os.Bundle): void;
						public onAttach(param0: globalAndroid.app.Activity): void;
						public onStart(): void;
					}
					export module MapFragment {
						export class zza extends java.lang.Object implements com.google.android.gms.maps.internal.MapLifecycleDelegate {
							public static class: java.lang.Class<com.google.android.gms.maps.MapFragment.zza>;
							public onStop(): void;
							public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
							public onDestroy(): void;
							public getMapAsync(param0: com.google.android.gms.maps.OnMapReadyCallback): void;
							public onResume(): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
							public onDestroyView(): void;
							public onLowMemory(): void;
							public constructor(param0: globalAndroid.app.Fragment, param1: com.google.android.gms.maps.internal.IMapFragmentDelegate);
							public onInflate(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle): void;
							public onPause(): void;
							public onExitAmbient(): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onStart(): void;
							public onEnterAmbient(param0: globalAndroid.os.Bundle): void;
						}
						export class zzb extends java.lang.Object /* com.google.android.gms.dynamic.zza<com.google.android.gms.maps.MapFragment.zza>*/ {
							public static class: java.lang.Class<com.google.android.gms.maps.MapFragment.zzb>;
							public getMapAsync(param0: com.google.android.gms.maps.OnMapReadyCallback): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class MapView extends globalAndroid.widget.FrameLayout {
						public static class: java.lang.Class<com.google.android.gms.maps.MapView>;
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.maps.GoogleMapOptions);
						public isLayoutRequested(): boolean;
						public canResolveLayoutDirection(): boolean;
						public constructor(param0: globalAndroid.content.Context);
						public sendAccessibilityEvent(param0: number): void;
						public onStartNestedScroll(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): boolean;
						public onNestedPrePerformAccessibilityAction(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.os.Bundle): boolean;
						public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public clearChildFocus(param0: globalAndroid.view.View): void;
						public requestChildFocus(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
						/** @deprecated */
						public invalidateChild(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect): void;
						public onLowMemory(): void;
						public onPause(): void;
						public onNestedFling(param0: globalAndroid.view.View, param1: number, param2: number, param3: boolean): boolean;
						public onDestroy(): void;
						public childHasTransientStateChanged(param0: globalAndroid.view.View, param1: boolean): void;
						public isTextAlignmentResolved(): boolean;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
						public getTextDirection(): number;
						public showContextMenuForChild(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
						public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
						public onDescendantInvalidated(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
						public removeView(param0: globalAndroid.view.View): void;
						public getChildVisibleRect(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.Point): boolean;
						public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public getMapAsync(param0: com.google.android.gms.maps.OnMapReadyCallback): void;
						public onResume(): void;
						public onStop(): void;
						public onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: native.Array<number>): void;
						public recomputeViewAttributes(param0: globalAndroid.view.View): void;
						public showContextMenuForChild(param0: globalAndroid.view.View): boolean;
						public canResolveTextDirection(): boolean;
						public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public requestDisallowInterceptTouchEvent(param0: boolean): void;
						public isLayoutDirectionResolved(): boolean;
						public onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
						public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
						public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public requestLayout(): void;
						public notifySubtreeAccessibilityStateChanged(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
						public keyboardNavigationClusterSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
						public bringChildToFront(param0: globalAndroid.view.View): void;
						public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
						public addView(param0: globalAndroid.view.View, param1: number): void;
						public onStart(): void;
						public requestChildRectangleOnScreen(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: boolean): boolean;
						public isTextDirectionResolved(): boolean;
						public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback, param2: number): globalAndroid.view.ActionMode;
						/** @deprecated */
						public requestFitSystemWindows(): void;
						public onEnterAmbient(param0: globalAndroid.os.Bundle): void;
						public focusSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
						public onStopNestedScroll(param0: globalAndroid.view.View): void;
						public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public requestTransparentRegion(param0: globalAndroid.view.View): void;
						public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
						public addView(param0: globalAndroid.view.View): void;
						public onNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public createContextMenu(param0: globalAndroid.view.ContextMenu): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public childDrawableStateChanged(param0: globalAndroid.view.View): void;
						public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
						public requestFitSystemWindows(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public updateViewLayout(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
						public getParentForAccessibility(): globalAndroid.view.ViewParent;
						public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						public focusableViewAvailable(param0: globalAndroid.view.View): void;
						public focusSearch(param0: number): globalAndroid.view.View;
						public requestSendAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
						public onExitAmbient(): void;
						public getTextAlignment(): number;
						public onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public onSaveInstanceState(): globalAndroid.os.Parcelable;
						/** @deprecated */
						public invalidateChildInParent(param0: native.Array<number>, param1: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
						public getParent(): globalAndroid.view.ViewParent;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
					}
					export module MapView {
						export class zza extends java.lang.Object implements com.google.android.gms.maps.internal.MapLifecycleDelegate {
							public static class: java.lang.Class<com.google.android.gms.maps.MapView.zza>;
							public constructor(param0: globalAndroid.view.ViewGroup, param1: com.google.android.gms.maps.internal.IMapViewDelegate);
							public onStop(): void;
							public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
							public onDestroy(): void;
							public getMapAsync(param0: com.google.android.gms.maps.OnMapReadyCallback): void;
							public onResume(): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
							public onDestroyView(): void;
							public onLowMemory(): void;
							public onInflate(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle): void;
							public onPause(): void;
							public onExitAmbient(): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onStart(): void;
							public onEnterAmbient(param0: globalAndroid.os.Bundle): void;
						}
						export class zzb extends java.lang.Object /* com.google.android.gms.dynamic.zza<com.google.android.gms.maps.MapView.zza>*/ {
							public static class: java.lang.Class<com.google.android.gms.maps.MapView.zzb>;
							public getMapAsync(param0: com.google.android.gms.maps.OnMapReadyCallback): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class MapsInitializer extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.maps.MapsInitializer>;
						public static initialize(param0: globalAndroid.content.Context): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class OnMapReadyCallback extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.maps.OnMapReadyCallback>;
						/**
						 * Constructs a new instance of the com.google.android.gms.maps.OnMapReadyCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onMapReady(param0: com.google.android.gms.maps.GoogleMap): void;
						});
						public constructor();
						public onMapReady(param0: com.google.android.gms.maps.GoogleMap): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class OnStreetViewPanoramaReadyCallback extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.maps.OnStreetViewPanoramaReadyCallback>;
						/**
						 * Constructs a new instance of the com.google.android.gms.maps.OnStreetViewPanoramaReadyCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onStreetViewPanoramaReady(param0: com.google.android.gms.maps.StreetViewPanorama): void;
						});
						public constructor();
						public onStreetViewPanoramaReady(param0: com.google.android.gms.maps.StreetViewPanorama): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class Projection extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.maps.Projection>;
						public fromScreenLocation(param0: globalAndroid.graphics.Point): com.google.android.gms.maps.model.LatLng;
						public toScreenLocation(param0: com.google.android.gms.maps.model.LatLng): globalAndroid.graphics.Point;
						public getVisibleRegion(): com.google.android.gms.maps.model.VisibleRegion;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class StreetViewPanorama extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.maps.StreetViewPanorama>;
						public setPosition(param0: com.google.android.gms.maps.model.LatLng, param1: number): void;
						public isUserNavigationEnabled(): boolean;
						public isStreetNamesEnabled(): boolean;
						public setOnStreetViewPanoramaCameraChangeListener(param0: com.google.android.gms.maps.StreetViewPanorama.OnStreetViewPanoramaCameraChangeListener): void;
						public setZoomGesturesEnabled(param0: boolean): void;
						public isPanningGesturesEnabled(): boolean;
						public getPanoramaCamera(): com.google.android.gms.maps.model.StreetViewPanoramaCamera;
						public getLocation(): com.google.android.gms.maps.model.StreetViewPanoramaLocation;
						public isZoomGesturesEnabled(): boolean;
						public pointToOrientation(param0: globalAndroid.graphics.Point): com.google.android.gms.maps.model.StreetViewPanoramaOrientation;
						public animateTo(param0: com.google.android.gms.maps.model.StreetViewPanoramaCamera, param1: number): void;
						public setPanningGesturesEnabled(param0: boolean): void;
						public setOnStreetViewPanoramaClickListener(param0: com.google.android.gms.maps.StreetViewPanorama.OnStreetViewPanoramaClickListener): void;
						public setOnStreetViewPanoramaLongClickListener(param0: com.google.android.gms.maps.StreetViewPanorama.OnStreetViewPanoramaLongClickListener): void;
						public setOnStreetViewPanoramaChangeListener(param0: com.google.android.gms.maps.StreetViewPanorama.OnStreetViewPanoramaChangeListener): void;
						public setUserNavigationEnabled(param0: boolean): void;
						public setStreetNamesEnabled(param0: boolean): void;
						public setPosition(param0: string): void;
						public orientationToPoint(param0: com.google.android.gms.maps.model.StreetViewPanoramaOrientation): globalAndroid.graphics.Point;
						public constructor(param0: com.google.android.gms.maps.internal.IStreetViewPanoramaDelegate);
						public setPosition(param0: com.google.android.gms.maps.model.LatLng): void;
					}
					export module StreetViewPanorama {
						export class OnStreetViewPanoramaCameraChangeListener extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.StreetViewPanorama.OnStreetViewPanoramaCameraChangeListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.StreetViewPanorama$OnStreetViewPanoramaCameraChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onStreetViewPanoramaCameraChange(param0: com.google.android.gms.maps.model.StreetViewPanoramaCamera): void;
							});
							public constructor();
							public onStreetViewPanoramaCameraChange(param0: com.google.android.gms.maps.model.StreetViewPanoramaCamera): void;
						}
						export class OnStreetViewPanoramaChangeListener extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.StreetViewPanorama.OnStreetViewPanoramaChangeListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.StreetViewPanorama$OnStreetViewPanoramaChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onStreetViewPanoramaChange(param0: com.google.android.gms.maps.model.StreetViewPanoramaLocation): void;
							});
							public constructor();
							public onStreetViewPanoramaChange(param0: com.google.android.gms.maps.model.StreetViewPanoramaLocation): void;
						}
						export class OnStreetViewPanoramaClickListener extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.StreetViewPanorama.OnStreetViewPanoramaClickListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.StreetViewPanorama$OnStreetViewPanoramaClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onStreetViewPanoramaClick(param0: com.google.android.gms.maps.model.StreetViewPanoramaOrientation): void;
							});
							public constructor();
							public onStreetViewPanoramaClick(param0: com.google.android.gms.maps.model.StreetViewPanoramaOrientation): void;
						}
						export class OnStreetViewPanoramaLongClickListener extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.StreetViewPanorama.OnStreetViewPanoramaLongClickListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.StreetViewPanorama$OnStreetViewPanoramaLongClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onStreetViewPanoramaLongClick(param0: com.google.android.gms.maps.model.StreetViewPanoramaOrientation): void;
							});
							public constructor();
							public onStreetViewPanoramaLongClick(param0: com.google.android.gms.maps.model.StreetViewPanoramaOrientation): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class StreetViewPanoramaFragment extends globalAndroid.app.Fragment {
						public static class: java.lang.Class<com.google.android.gms.maps.StreetViewPanoramaFragment>;
						public constructor();
						public onActivityCreated(param0: globalAndroid.os.Bundle): void;
						/** @deprecated */
						public onAttach(param0: globalAndroid.app.Activity): void;
						public onResume(): void;
						public getStreetViewPanoramaAsync(param0: com.google.android.gms.maps.OnStreetViewPanoramaReadyCallback): void;
						public onTrimMemory(param0: number): void;
						public setArguments(param0: globalAndroid.os.Bundle): void;
						public onCreateContextMenu(param0: globalAndroid.view.ContextMenu, param1: globalAndroid.view.View, param2: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
						/** @deprecated */
						public onInflate(param0: globalAndroid.util.AttributeSet, param1: globalAndroid.os.Bundle): void;
						public onInflate(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: globalAndroid.os.Bundle): void;
						/** @deprecated */
						public onInflate(param0: globalAndroid.app.Activity, param1: globalAndroid.util.AttributeSet, param2: globalAndroid.os.Bundle): void;
						public onLowMemory(): void;
						public onPause(): void;
						public static newInstance(): com.google.android.gms.maps.StreetViewPanoramaFragment;
						public onDestroyView(): void;
						public static newInstance(param0: com.google.android.gms.maps.StreetViewPanoramaOptions): com.google.android.gms.maps.StreetViewPanoramaFragment;
						public onDestroy(): void;
						public onInflate(param0: globalAndroid.app.Activity, param1: globalAndroid.util.AttributeSet, param2: globalAndroid.os.Bundle): void;
						public onAttach(param0: globalAndroid.content.Context): void;
						public onAttach(param0: globalAndroid.app.Activity): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
					}
					export module StreetViewPanoramaFragment {
						export class zza extends java.lang.Object implements com.google.android.gms.maps.internal.StreetViewLifecycleDelegate {
							public static class: java.lang.Class<com.google.android.gms.maps.StreetViewPanoramaFragment.zza>;
							public onStop(): void;
							public getStreetViewPanoramaAsync(param0: com.google.android.gms.maps.OnStreetViewPanoramaReadyCallback): void;
							public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
							public onDestroy(): void;
							public onResume(): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
							public onDestroyView(): void;
							public onLowMemory(): void;
							public constructor(param0: globalAndroid.app.Fragment, param1: com.google.android.gms.maps.internal.IStreetViewPanoramaFragmentDelegate);
							public onInflate(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle): void;
							public onPause(): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onStart(): void;
						}
						export class zzb extends java.lang.Object /* com.google.android.gms.dynamic.zza<com.google.android.gms.maps.StreetViewPanoramaFragment.zza>*/ {
							public static class: java.lang.Class<com.google.android.gms.maps.StreetViewPanoramaFragment.zzb>;
							public getStreetViewPanoramaAsync(param0: com.google.android.gms.maps.OnStreetViewPanoramaReadyCallback): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class StreetViewPanoramaOptions extends com.google.android.gms.common.internal.safeparcel.zza implements com.google.android.gms.common.internal.ReflectedParcelable {
						public static class: java.lang.Class<com.google.android.gms.maps.StreetViewPanoramaOptions>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.StreetViewPanoramaOptions>;
						public zoomGesturesEnabled(param0: boolean): com.google.android.gms.maps.StreetViewPanoramaOptions;
						public constructor();
						public getPanningGesturesEnabled(): java.lang.Boolean;
						public describeContents(): number;
						public userNavigationEnabled(param0: boolean): com.google.android.gms.maps.StreetViewPanoramaOptions;
						public panningGesturesEnabled(param0: boolean): com.google.android.gms.maps.StreetViewPanoramaOptions;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getZoomGesturesEnabled(): java.lang.Boolean;
						public getPanoramaId(): string;
						public getUserNavigationEnabled(): java.lang.Boolean;
						public getPosition(): com.google.android.gms.maps.model.LatLng;
						public getUseViewLifecycleInFragment(): java.lang.Boolean;
						public toString(): string;
						public getRadius(): java.lang.Integer;
						public panoramaCamera(param0: com.google.android.gms.maps.model.StreetViewPanoramaCamera): com.google.android.gms.maps.StreetViewPanoramaOptions;
						public position(param0: com.google.android.gms.maps.model.LatLng): com.google.android.gms.maps.StreetViewPanoramaOptions;
						public getStreetNamesEnabled(): java.lang.Boolean;
						public streetNamesEnabled(param0: boolean): com.google.android.gms.maps.StreetViewPanoramaOptions;
						public position(param0: com.google.android.gms.maps.model.LatLng, param1: java.lang.Integer): com.google.android.gms.maps.StreetViewPanoramaOptions;
						public getStreetViewPanoramaCamera(): com.google.android.gms.maps.model.StreetViewPanoramaCamera;
						public panoramaId(param0: string): com.google.android.gms.maps.StreetViewPanoramaOptions;
						public useViewLifecycleInFragment(param0: boolean): com.google.android.gms.maps.StreetViewPanoramaOptions;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class StreetViewPanoramaView extends globalAndroid.widget.FrameLayout {
						public static class: java.lang.Class<com.google.android.gms.maps.StreetViewPanoramaView>;
						public isLayoutRequested(): boolean;
						public canResolveLayoutDirection(): boolean;
						public constructor(param0: globalAndroid.content.Context);
						public sendAccessibilityEvent(param0: number): void;
						public onStartNestedScroll(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): boolean;
						public onNestedPrePerformAccessibilityAction(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.os.Bundle): boolean;
						public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public getStreetViewPanoramaAsync(param0: com.google.android.gms.maps.OnStreetViewPanoramaReadyCallback): void;
						public clearChildFocus(param0: globalAndroid.view.View): void;
						public requestChildFocus(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
						/** @deprecated */
						public invalidateChild(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect): void;
						public onLowMemory(): void;
						public onPause(): void;
						public onNestedFling(param0: globalAndroid.view.View, param1: number, param2: number, param3: boolean): boolean;
						public onDestroy(): void;
						public childHasTransientStateChanged(param0: globalAndroid.view.View, param1: boolean): void;
						public isTextAlignmentResolved(): boolean;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
						public getTextDirection(): number;
						public showContextMenuForChild(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
						public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
						public onDescendantInvalidated(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
						public removeView(param0: globalAndroid.view.View): void;
						public getChildVisibleRect(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.Point): boolean;
						public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public onResume(): void;
						public onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: native.Array<number>): void;
						public recomputeViewAttributes(param0: globalAndroid.view.View): void;
						public showContextMenuForChild(param0: globalAndroid.view.View): boolean;
						public canResolveTextDirection(): boolean;
						public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public requestDisallowInterceptTouchEvent(param0: boolean): void;
						public isLayoutDirectionResolved(): boolean;
						public onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
						public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
						public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public requestLayout(): void;
						public notifySubtreeAccessibilityStateChanged(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
						public keyboardNavigationClusterSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
						public bringChildToFront(param0: globalAndroid.view.View): void;
						public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
						public addView(param0: globalAndroid.view.View, param1: number): void;
						public requestChildRectangleOnScreen(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: boolean): boolean;
						public isTextDirectionResolved(): boolean;
						public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback, param2: number): globalAndroid.view.ActionMode;
						/** @deprecated */
						public requestFitSystemWindows(): void;
						public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.maps.StreetViewPanoramaOptions);
						public focusSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
						public onStopNestedScroll(param0: globalAndroid.view.View): void;
						public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public requestTransparentRegion(param0: globalAndroid.view.View): void;
						public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
						public addView(param0: globalAndroid.view.View): void;
						public onNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public createContextMenu(param0: globalAndroid.view.ContextMenu): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public childDrawableStateChanged(param0: globalAndroid.view.View): void;
						public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
						public requestFitSystemWindows(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public updateViewLayout(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
						public getParentForAccessibility(): globalAndroid.view.ViewParent;
						public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						public focusableViewAvailable(param0: globalAndroid.view.View): void;
						public focusSearch(param0: number): globalAndroid.view.View;
						public requestSendAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
						public getTextAlignment(): number;
						public onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public onSaveInstanceState(): globalAndroid.os.Parcelable;
						/** @deprecated */
						public invalidateChildInParent(param0: native.Array<number>, param1: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
						public getParent(): globalAndroid.view.ViewParent;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
					}
					export module StreetViewPanoramaView {
						export class zza extends java.lang.Object implements com.google.android.gms.maps.internal.StreetViewLifecycleDelegate {
							public static class: java.lang.Class<com.google.android.gms.maps.StreetViewPanoramaView.zza>;
							public onStop(): void;
							public getStreetViewPanoramaAsync(param0: com.google.android.gms.maps.OnStreetViewPanoramaReadyCallback): void;
							public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
							public onDestroy(): void;
							public onResume(): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
							public onDestroyView(): void;
							public onLowMemory(): void;
							public onInflate(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle): void;
							public onPause(): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onStart(): void;
							public constructor(param0: globalAndroid.view.ViewGroup, param1: com.google.android.gms.maps.internal.IStreetViewPanoramaViewDelegate);
						}
						export class zzb extends java.lang.Object /* com.google.android.gms.dynamic.zza<com.google.android.gms.maps.StreetViewPanoramaView.zza>*/ {
							public static class: java.lang.Class<com.google.android.gms.maps.StreetViewPanoramaView.zzb>;
							public getStreetViewPanoramaAsync(param0: com.google.android.gms.maps.OnStreetViewPanoramaReadyCallback): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class UiSettings extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.maps.UiSettings>;
						public setMapToolbarEnabled(param0: boolean): void;
						public setZoomControlsEnabled(param0: boolean): void;
						public setZoomGesturesEnabled(param0: boolean): void;
						public isTiltGesturesEnabled(): boolean;
						public setTiltGesturesEnabled(param0: boolean): void;
						public isZoomGesturesEnabled(): boolean;
						public setCompassEnabled(param0: boolean): void;
						public setAllGesturesEnabled(param0: boolean): void;
						public isCompassEnabled(): boolean;
						public setRotateGesturesEnabled(param0: boolean): void;
						public isMyLocationButtonEnabled(): boolean;
						public isZoomControlsEnabled(): boolean;
						public setIndoorLevelPickerEnabled(param0: boolean): void;
						public isMapToolbarEnabled(): boolean;
						public isIndoorLevelPickerEnabled(): boolean;
						public isScrollGesturesEnabled(): boolean;
						public setScrollGesturesEnabled(param0: boolean): void;
						public setMyLocationButtonEnabled(param0: boolean): void;
						public isRotateGesturesEnabled(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class ICameraUpdateFactoryDelegate extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.ICameraUpdateFactoryDelegate>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.ICameraUpdateFactoryDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zoomIn(): com.google.android.gms.dynamic.IObjectWrapper;
								zoomOut(): com.google.android.gms.dynamic.IObjectWrapper;
								scrollBy(param0: number, param1: number): com.google.android.gms.dynamic.IObjectWrapper;
								zoomTo(param0: number): com.google.android.gms.dynamic.IObjectWrapper;
								zoomBy(param0: number): com.google.android.gms.dynamic.IObjectWrapper;
								zoomByWithFocus(param0: number, param1: number, param2: number): com.google.android.gms.dynamic.IObjectWrapper;
								newCameraPosition(param0: com.google.android.gms.maps.model.CameraPosition): com.google.android.gms.dynamic.IObjectWrapper;
								newLatLng(param0: com.google.android.gms.maps.model.LatLng): com.google.android.gms.dynamic.IObjectWrapper;
								newLatLngZoom(param0: com.google.android.gms.maps.model.LatLng, param1: number): com.google.android.gms.dynamic.IObjectWrapper;
								newLatLngBounds(param0: com.google.android.gms.maps.model.LatLngBounds, param1: number): com.google.android.gms.dynamic.IObjectWrapper;
								newLatLngBoundsWithSize(param0: com.google.android.gms.maps.model.LatLngBounds, param1: number, param2: number, param3: number): com.google.android.gms.dynamic.IObjectWrapper;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
							public newLatLngBounds(param0: com.google.android.gms.maps.model.LatLngBounds, param1: number): com.google.android.gms.dynamic.IObjectWrapper;
							public scrollBy(param0: number, param1: number): com.google.android.gms.dynamic.IObjectWrapper;
							public newLatLngBoundsWithSize(param0: com.google.android.gms.maps.model.LatLngBounds, param1: number, param2: number, param3: number): com.google.android.gms.dynamic.IObjectWrapper;
							public zoomTo(param0: number): com.google.android.gms.dynamic.IObjectWrapper;
							public zoomBy(param0: number): com.google.android.gms.dynamic.IObjectWrapper;
							public newLatLngZoom(param0: com.google.android.gms.maps.model.LatLng, param1: number): com.google.android.gms.dynamic.IObjectWrapper;
							public zoomIn(): com.google.android.gms.dynamic.IObjectWrapper;
							public zoomByWithFocus(param0: number, param1: number, param2: number): com.google.android.gms.dynamic.IObjectWrapper;
							public newLatLng(param0: com.google.android.gms.maps.model.LatLng): com.google.android.gms.dynamic.IObjectWrapper;
							public zoomOut(): com.google.android.gms.dynamic.IObjectWrapper;
							public newCameraPosition(param0: com.google.android.gms.maps.model.CameraPosition): com.google.android.gms.dynamic.IObjectWrapper;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class IGoogleMapDelegate extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.IGoogleMapDelegate>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.IGoogleMapDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getCameraPosition(): com.google.android.gms.maps.model.CameraPosition;
								getMaxZoomLevel(): number;
								getMinZoomLevel(): number;
								moveCamera(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
								animateCamera(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
								animateCameraWithCallback(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: any /* com.google.android.gms.maps.internal.zzc*/): void;
								animateCameraWithDurationAndCallback(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: number, param2: any /* com.google.android.gms.maps.internal.zzc*/): void;
								stopAnimation(): void;
								addPolyline(param0: com.google.android.gms.maps.model.PolylineOptions): com.google.android.gms.maps.model.internal.IPolylineDelegate;
								addPolygon(param0: com.google.android.gms.maps.model.PolygonOptions): any /* com.google.android.gms.maps.model.internal.zzs*/;
								addMarker(param0: com.google.android.gms.maps.model.MarkerOptions): any /* com.google.android.gms.maps.model.internal.zzp*/;
								addGroundOverlay(param0: com.google.android.gms.maps.model.GroundOverlayOptions): any /* com.google.android.gms.maps.model.internal.zzg*/;
								addTileOverlay(param0: com.google.android.gms.maps.model.TileOverlayOptions): any /* com.google.android.gms.maps.model.internal.zzw*/;
								clear(): void;
								getMapType(): number;
								setMapType(param0: number): void;
								isTrafficEnabled(): boolean;
								setTrafficEnabled(param0: boolean): void;
								isIndoorEnabled(): boolean;
								setIndoorEnabled(param0: boolean): boolean;
								isMyLocationEnabled(): boolean;
								setMyLocationEnabled(param0: boolean): void;
								getMyLocation(): globalAndroid.location.Location;
								setLocationSource(param0: com.google.android.gms.maps.internal.ILocationSourceDelegate): void;
								getUiSettings(): com.google.android.gms.maps.internal.IUiSettingsDelegate;
								getProjection(): com.google.android.gms.maps.internal.IProjectionDelegate;
								setOnCameraChangeListener(param0: any /* com.google.android.gms.maps.internal.zzl*/): void;
								setOnMapClickListener(param0: any /* com.google.android.gms.maps.internal.zzaj*/): void;
								setOnMapLongClickListener(param0: any /* com.google.android.gms.maps.internal.zzan*/): void;
								setOnMarkerClickListener(param0: any /* com.google.android.gms.maps.internal.zzar*/): void;
								setOnMarkerDragListener(param0: any /* com.google.android.gms.maps.internal.zzat*/): void;
								setOnInfoWindowClickListener(param0: any /* com.google.android.gms.maps.internal.zzab*/): void;
								setInfoWindowAdapter(param0: any /* com.google.android.gms.maps.internal.zzh*/): void;
								addCircle(param0: com.google.android.gms.maps.model.CircleOptions): any /* com.google.android.gms.maps.model.internal.zzd*/;
								setOnMyLocationChangeListener(param0: any /* com.google.android.gms.maps.internal.zzax*/): void;
								setOnMyLocationButtonClickListener(param0: any /* com.google.android.gms.maps.internal.zzav*/): void;
								snapshot(param0: any /* com.google.android.gms.maps.internal.zzbq*/, param1: com.google.android.gms.dynamic.IObjectWrapper): void;
								setPadding(param0: number, param1: number, param2: number, param3: number): void;
								isBuildingsEnabled(): boolean;
								setBuildingsEnabled(param0: boolean): void;
								setOnMapLoadedCallback(param0: any /* com.google.android.gms.maps.internal.zzal*/): void;
								getFocusedBuilding(): any /* com.google.android.gms.maps.model.internal.zzj*/;
								setOnIndoorStateChangeListener(param0: any /* com.google.android.gms.maps.internal.zzz*/): void;
								setWatermarkEnabled(param0: boolean): void;
								getMapAsync(param0: any /* com.google.android.gms.maps.internal.zzap*/): void;
								onCreate(param0: globalAndroid.os.Bundle): void;
								onResume(): void;
								onPause(): void;
								onDestroy(): void;
								onLowMemory(): void;
								useViewLifecycleWhenInFragment(): boolean;
								onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
								setContentDescription(param0: string): void;
								snapshotForTest(param0: any /* com.google.android.gms.maps.internal.zzbq*/): void;
								setOnPoiClickListener(param0: any /* com.google.android.gms.maps.internal.zzaz*/): void;
								onEnterAmbient(param0: globalAndroid.os.Bundle): void;
								onExitAmbient(): void;
								setOnGroundOverlayClickListener(param0: any /* com.google.android.gms.maps.internal.zzx*/): void;
								setOnInfoWindowLongClickListener(param0: any /* com.google.android.gms.maps.internal.zzaf*/): void;
								setOnPolygonClickListener(param0: any /* com.google.android.gms.maps.internal.zzbb*/): void;
								setOnInfoWindowCloseListener(param0: any /* com.google.android.gms.maps.internal.zzad*/): void;
								setOnPolylineClickListener(param0: any /* com.google.android.gms.maps.internal.zzbd*/): void;
								setOnCircleClickListener(param0: any /* com.google.android.gms.maps.internal.zzv*/): void;
								setMinZoomPreference(param0: number): void;
								setMaxZoomPreference(param0: number): void;
								resetMinMaxZoomPreference(): void;
								setLatLngBoundsForCameraTarget(param0: com.google.android.gms.maps.model.LatLngBounds): void;
								setOnCameraMoveStartedListener(param0: any /* com.google.android.gms.maps.internal.zzt*/): void;
								setOnCameraMoveListener(param0: any /* com.google.android.gms.maps.internal.zzr*/): void;
								setOnCameraMoveCanceledListener(param0: any /* com.google.android.gms.maps.internal.zzp*/): void;
								setOnCameraIdleListener(param0: any /* com.google.android.gms.maps.internal.zzn*/): void;
								setMapStyle(param0: com.google.android.gms.maps.model.MapStyleOptions): boolean;
								onStart(): void;
								onStop(): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public getMapType(): number;
							public moveCamera(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
							public getUiSettings(): com.google.android.gms.maps.internal.IUiSettingsDelegate;
							public setOnCameraMoveStartedListener(param0: any /* com.google.android.gms.maps.internal.zzt*/): void;
							public onResume(): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
							public setOnCameraMoveCanceledListener(param0: any /* com.google.android.gms.maps.internal.zzp*/): void;
							public isBuildingsEnabled(): boolean;
							public onExitAmbient(): void;
							public animateCamera(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
							public setMapStyle(param0: com.google.android.gms.maps.model.MapStyleOptions): boolean;
							public addPolyline(param0: com.google.android.gms.maps.model.PolylineOptions): com.google.android.gms.maps.model.internal.IPolylineDelegate;
							public snapshotForTest(param0: any /* com.google.android.gms.maps.internal.zzbq*/): void;
							public setOnCameraChangeListener(param0: any /* com.google.android.gms.maps.internal.zzl*/): void;
							public isTrafficEnabled(): boolean;
							public setLatLngBoundsForCameraTarget(param0: com.google.android.gms.maps.model.LatLngBounds): void;
							public getMinZoomLevel(): number;
							public setContentDescription(param0: string): void;
							public stopAnimation(): void;
							public setOnPolygonClickListener(param0: any /* com.google.android.gms.maps.internal.zzbb*/): void;
							public setMyLocationEnabled(param0: boolean): void;
							public setLocationSource(param0: com.google.android.gms.maps.internal.ILocationSourceDelegate): void;
							public setOnInfoWindowCloseListener(param0: any /* com.google.android.gms.maps.internal.zzad*/): void;
							public asBinder(): globalAndroid.os.IBinder;
							public onLowMemory(): void;
							public addCircle(param0: com.google.android.gms.maps.model.CircleOptions): any /* com.google.android.gms.maps.model.internal.zzd*/;
							public setOnMyLocationButtonClickListener(param0: any /* com.google.android.gms.maps.internal.zzav*/): void;
							public onEnterAmbient(param0: globalAndroid.os.Bundle): void;
							public isIndoorEnabled(): boolean;
							public setMinZoomPreference(param0: number): void;
							public setOnIndoorStateChangeListener(param0: any /* com.google.android.gms.maps.internal.zzz*/): void;
							public animateCameraWithCallback(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: any /* com.google.android.gms.maps.internal.zzc*/): void;
							public setInfoWindowAdapter(param0: any /* com.google.android.gms.maps.internal.zzh*/): void;
							public setOnMyLocationChangeListener(param0: any /* com.google.android.gms.maps.internal.zzax*/): void;
							public getMyLocation(): globalAndroid.location.Location;
							public setOnMarkerClickListener(param0: any /* com.google.android.gms.maps.internal.zzar*/): void;
							public useViewLifecycleWhenInFragment(): boolean;
							public setOnMapLongClickListener(param0: any /* com.google.android.gms.maps.internal.zzan*/): void;
							public snapshot(param0: any /* com.google.android.gms.maps.internal.zzbq*/, param1: com.google.android.gms.dynamic.IObjectWrapper): void;
							public onDestroy(): void;
							public addPolygon(param0: com.google.android.gms.maps.model.PolygonOptions): any /* com.google.android.gms.maps.model.internal.zzs*/;
							public getFocusedBuilding(): any /* com.google.android.gms.maps.model.internal.zzj*/;
							public setOnCameraIdleListener(param0: any /* com.google.android.gms.maps.internal.zzn*/): void;
							public setBuildingsEnabled(param0: boolean): void;
							public setOnPoiClickListener(param0: any /* com.google.android.gms.maps.internal.zzaz*/): void;
							public animateCameraWithDurationAndCallback(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: number, param2: any /* com.google.android.gms.maps.internal.zzc*/): void;
							public setOnPolylineClickListener(param0: any /* com.google.android.gms.maps.internal.zzbd*/): void;
							public setOnGroundOverlayClickListener(param0: any /* com.google.android.gms.maps.internal.zzx*/): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onStart(): void;
							public setMaxZoomPreference(param0: number): void;
							public addMarker(param0: com.google.android.gms.maps.model.MarkerOptions): any /* com.google.android.gms.maps.model.internal.zzp*/;
							public setWatermarkEnabled(param0: boolean): void;
							public setOnMarkerDragListener(param0: any /* com.google.android.gms.maps.internal.zzat*/): void;
							public setOnInfoWindowLongClickListener(param0: any /* com.google.android.gms.maps.internal.zzaf*/): void;
							public onStop(): void;
							public setOnMapLoadedCallback(param0: any /* com.google.android.gms.maps.internal.zzal*/): void;
							public clear(): void;
							public setOnMapClickListener(param0: any /* com.google.android.gms.maps.internal.zzaj*/): void;
							public setTrafficEnabled(param0: boolean): void;
							public addGroundOverlay(param0: com.google.android.gms.maps.model.GroundOverlayOptions): any /* com.google.android.gms.maps.model.internal.zzg*/;
							public getMaxZoomLevel(): number;
							public setOnCameraMoveListener(param0: any /* com.google.android.gms.maps.internal.zzr*/): void;
							public setIndoorEnabled(param0: boolean): boolean;
							public resetMinMaxZoomPreference(): void;
							public getCameraPosition(): com.google.android.gms.maps.model.CameraPosition;
							public getProjection(): com.google.android.gms.maps.internal.IProjectionDelegate;
							public onPause(): void;
							public addTileOverlay(param0: com.google.android.gms.maps.model.TileOverlayOptions): any /* com.google.android.gms.maps.model.internal.zzw*/;
							public getMapAsync(param0: any /* com.google.android.gms.maps.internal.zzap*/): void;
							public setMapType(param0: number): void;
							public isMyLocationEnabled(): boolean;
							public setOnCircleClickListener(param0: any /* com.google.android.gms.maps.internal.zzv*/): void;
							public setPadding(param0: number, param1: number, param2: number, param3: number): void;
							public setOnInfoWindowClickListener(param0: any /* com.google.android.gms.maps.internal.zzab*/): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class ILocationSourceDelegate extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.ILocationSourceDelegate>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.ILocationSourceDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								activate(param0: any /* com.google.android.gms.maps.internal.zzah*/): void;
								deactivate(): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
							public activate(param0: any /* com.google.android.gms.maps.internal.zzah*/): void;
							public deactivate(): void;
						}
						export module ILocationSourceDelegate {
							export abstract class zza extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.internal.ILocationSourceDelegate {
								public static class: java.lang.Class<com.google.android.gms.maps.internal.ILocationSourceDelegate.zza>;
								public activate(param0: any /* com.google.android.gms.maps.internal.zzah*/): void;
								public isBinderAlive(): boolean;
								public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
								public getInterfaceDescriptor(): string;
								public constructor();
								public deactivate(): void;
								public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
								public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
								public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
								public pingBinder(): boolean;
								public asBinder(): globalAndroid.os.IBinder;
								public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
								public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class IMapFragmentDelegate extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.IMapFragmentDelegate>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.IMapFragmentDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getMap(): com.google.android.gms.maps.internal.IGoogleMapDelegate;
								onInflate(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.maps.GoogleMapOptions, param2: globalAndroid.os.Bundle): void;
								onCreate(param0: globalAndroid.os.Bundle): void;
								onCreateView(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.dynamic.IObjectWrapper, param2: globalAndroid.os.Bundle): com.google.android.gms.dynamic.IObjectWrapper;
								onResume(): void;
								onPause(): void;
								onDestroyView(): void;
								onDestroy(): void;
								onLowMemory(): void;
								onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
								isReady(): boolean;
								getMapAsync(param0: any /* com.google.android.gms.maps.internal.zzap*/): void;
								onEnterAmbient(param0: globalAndroid.os.Bundle): void;
								onExitAmbient(): void;
								onStart(): void;
								onStop(): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public onStop(): void;
							public isReady(): boolean;
							public onDestroy(): void;
							public onResume(): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
							public onInflate(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.maps.GoogleMapOptions, param2: globalAndroid.os.Bundle): void;
							public onCreateView(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.dynamic.IObjectWrapper, param2: globalAndroid.os.Bundle): com.google.android.gms.dynamic.IObjectWrapper;
							public onDestroyView(): void;
							public asBinder(): globalAndroid.os.IBinder;
							public onLowMemory(): void;
							public getMap(): com.google.android.gms.maps.internal.IGoogleMapDelegate;
							public onPause(): void;
							public onExitAmbient(): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onEnterAmbient(param0: globalAndroid.os.Bundle): void;
							public onStart(): void;
							public getMapAsync(param0: any /* com.google.android.gms.maps.internal.zzap*/): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class IMapViewDelegate extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.IMapViewDelegate>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.IMapViewDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getMap(): com.google.android.gms.maps.internal.IGoogleMapDelegate;
								onCreate(param0: globalAndroid.os.Bundle): void;
								onResume(): void;
								onPause(): void;
								onDestroy(): void;
								onLowMemory(): void;
								onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
								getView(): com.google.android.gms.dynamic.IObjectWrapper;
								getMapAsync(param0: any /* com.google.android.gms.maps.internal.zzap*/): void;
								onEnterAmbient(param0: globalAndroid.os.Bundle): void;
								onExitAmbient(): void;
								onStart(): void;
								onStop(): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public onStop(): void;
							public onDestroy(): void;
							public getView(): com.google.android.gms.dynamic.IObjectWrapper;
							public onResume(): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
							public asBinder(): globalAndroid.os.IBinder;
							public onLowMemory(): void;
							public getMap(): com.google.android.gms.maps.internal.IGoogleMapDelegate;
							public onPause(): void;
							public onExitAmbient(): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onEnterAmbient(param0: globalAndroid.os.Bundle): void;
							public onStart(): void;
							public getMapAsync(param0: any /* com.google.android.gms.maps.internal.zzap*/): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class IProjectionDelegate extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.IProjectionDelegate>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.IProjectionDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								fromScreenLocation(param0: com.google.android.gms.dynamic.IObjectWrapper): com.google.android.gms.maps.model.LatLng;
								toScreenLocation(param0: com.google.android.gms.maps.model.LatLng): com.google.android.gms.dynamic.IObjectWrapper;
								getVisibleRegion(): com.google.android.gms.maps.model.VisibleRegion;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public fromScreenLocation(param0: com.google.android.gms.dynamic.IObjectWrapper): com.google.android.gms.maps.model.LatLng;
							public asBinder(): globalAndroid.os.IBinder;
							public getVisibleRegion(): com.google.android.gms.maps.model.VisibleRegion;
							public toScreenLocation(param0: com.google.android.gms.maps.model.LatLng): com.google.android.gms.dynamic.IObjectWrapper;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class IStreetViewPanoramaDelegate extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.IStreetViewPanoramaDelegate>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.IStreetViewPanoramaDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								enableZoom(param0: boolean): void;
								enablePanning(param0: boolean): void;
								enableUserNavigation(param0: boolean): void;
								enableStreetNames(param0: boolean): void;
								isZoomGesturesEnabled(): boolean;
								isPanningGesturesEnabled(): boolean;
								isUserNavigationEnabled(): boolean;
								isStreetNamesEnabled(): boolean;
								animateTo(param0: com.google.android.gms.maps.model.StreetViewPanoramaCamera, param1: number): void;
								getPanoramaCamera(): com.google.android.gms.maps.model.StreetViewPanoramaCamera;
								setPositionWithID(param0: string): void;
								setPosition(param0: com.google.android.gms.maps.model.LatLng): void;
								setPositionWithRadius(param0: com.google.android.gms.maps.model.LatLng, param1: number): void;
								getStreetViewPanoramaLocation(): com.google.android.gms.maps.model.StreetViewPanoramaLocation;
								setOnStreetViewPanoramaChangeListener(param0: any /* com.google.android.gms.maps.internal.zzbh*/): void;
								setOnStreetViewPanoramaCameraChangeListener(param0: any /* com.google.android.gms.maps.internal.zzbf*/): void;
								setOnStreetViewPanoramaClickListener(param0: any /* com.google.android.gms.maps.internal.zzbj*/): void;
								pointToOrientation(param0: com.google.android.gms.dynamic.IObjectWrapper): com.google.android.gms.maps.model.StreetViewPanoramaOrientation;
								orientationToPoint(param0: com.google.android.gms.maps.model.StreetViewPanoramaOrientation): com.google.android.gms.dynamic.IObjectWrapper;
								setOnStreetViewPanoramaLongClickListener(param0: any /* com.google.android.gms.maps.internal.zzbl*/): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public enableStreetNames(param0: boolean): void;
							public isPanningGesturesEnabled(): boolean;
							public isStreetNamesEnabled(): boolean;
							public animateTo(param0: com.google.android.gms.maps.model.StreetViewPanoramaCamera, param1: number): void;
							public setOnStreetViewPanoramaClickListener(param0: any /* com.google.android.gms.maps.internal.zzbj*/): void;
							public isUserNavigationEnabled(): boolean;
							public setPosition(param0: com.google.android.gms.maps.model.LatLng): void;
							public enablePanning(param0: boolean): void;
							public setOnStreetViewPanoramaChangeListener(param0: any /* com.google.android.gms.maps.internal.zzbh*/): void;
							public setOnStreetViewPanoramaCameraChangeListener(param0: any /* com.google.android.gms.maps.internal.zzbf*/): void;
							public pointToOrientation(param0: com.google.android.gms.dynamic.IObjectWrapper): com.google.android.gms.maps.model.StreetViewPanoramaOrientation;
							public orientationToPoint(param0: com.google.android.gms.maps.model.StreetViewPanoramaOrientation): com.google.android.gms.dynamic.IObjectWrapper;
							public getStreetViewPanoramaLocation(): com.google.android.gms.maps.model.StreetViewPanoramaLocation;
							public setOnStreetViewPanoramaLongClickListener(param0: any /* com.google.android.gms.maps.internal.zzbl*/): void;
							public asBinder(): globalAndroid.os.IBinder;
							public enableUserNavigation(param0: boolean): void;
							public getPanoramaCamera(): com.google.android.gms.maps.model.StreetViewPanoramaCamera;
							public setPositionWithID(param0: string): void;
							public enableZoom(param0: boolean): void;
							public setPositionWithRadius(param0: com.google.android.gms.maps.model.LatLng, param1: number): void;
							public isZoomGesturesEnabled(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class IStreetViewPanoramaFragmentDelegate extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.IStreetViewPanoramaFragmentDelegate>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.IStreetViewPanoramaFragmentDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getStreetViewPanorama(): com.google.android.gms.maps.internal.IStreetViewPanoramaDelegate;
								onInflate(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.maps.StreetViewPanoramaOptions, param2: globalAndroid.os.Bundle): void;
								onCreate(param0: globalAndroid.os.Bundle): void;
								onCreateView(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.dynamic.IObjectWrapper, param2: globalAndroid.os.Bundle): com.google.android.gms.dynamic.IObjectWrapper;
								onResume(): void;
								onPause(): void;
								onDestroyView(): void;
								onDestroy(): void;
								onLowMemory(): void;
								onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
								isReady(): boolean;
								getStreetViewPanoramaAsync(param0: any /* com.google.android.gms.maps.internal.zzbn*/): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public isReady(): boolean;
							public onDestroy(): void;
							public onResume(): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
							public getStreetViewPanoramaAsync(param0: any /* com.google.android.gms.maps.internal.zzbn*/): void;
							public onCreateView(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.dynamic.IObjectWrapper, param2: globalAndroid.os.Bundle): com.google.android.gms.dynamic.IObjectWrapper;
							public onDestroyView(): void;
							public asBinder(): globalAndroid.os.IBinder;
							public getStreetViewPanorama(): com.google.android.gms.maps.internal.IStreetViewPanoramaDelegate;
							public onLowMemory(): void;
							public onInflate(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.maps.StreetViewPanoramaOptions, param2: globalAndroid.os.Bundle): void;
							public onPause(): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class IStreetViewPanoramaViewDelegate extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.IStreetViewPanoramaViewDelegate>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.IStreetViewPanoramaViewDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getStreetViewPanorama(): com.google.android.gms.maps.internal.IStreetViewPanoramaDelegate;
								onCreate(param0: globalAndroid.os.Bundle): void;
								onResume(): void;
								onPause(): void;
								onDestroy(): void;
								onLowMemory(): void;
								onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
								getView(): com.google.android.gms.dynamic.IObjectWrapper;
								getStreetViewPanoramaAsync(param0: any /* com.google.android.gms.maps.internal.zzbn*/): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public getStreetViewPanoramaAsync(param0: any /* com.google.android.gms.maps.internal.zzbn*/): void;
							public asBinder(): globalAndroid.os.IBinder;
							public getStreetViewPanorama(): com.google.android.gms.maps.internal.IStreetViewPanoramaDelegate;
							public onLowMemory(): void;
							public onPause(): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onDestroy(): void;
							public getView(): com.google.android.gms.dynamic.IObjectWrapper;
							public onResume(): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class IUiSettingsDelegate extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.IUiSettingsDelegate>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.IUiSettingsDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								setZoomControlsEnabled(param0: boolean): void;
								setCompassEnabled(param0: boolean): void;
								setMyLocationButtonEnabled(param0: boolean): void;
								setScrollGesturesEnabled(param0: boolean): void;
								setZoomGesturesEnabled(param0: boolean): void;
								setTiltGesturesEnabled(param0: boolean): void;
								setRotateGesturesEnabled(param0: boolean): void;
								setAllGesturesEnabled(param0: boolean): void;
								isZoomControlsEnabled(): boolean;
								isCompassEnabled(): boolean;
								isMyLocationButtonEnabled(): boolean;
								isScrollGesturesEnabled(): boolean;
								isZoomGesturesEnabled(): boolean;
								isTiltGesturesEnabled(): boolean;
								isRotateGesturesEnabled(): boolean;
								setIndoorLevelPickerEnabled(param0: boolean): void;
								isIndoorLevelPickerEnabled(): boolean;
								setMapToolbarEnabled(param0: boolean): void;
								isMapToolbarEnabled(): boolean;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public setScrollGesturesEnabled(param0: boolean): void;
							public isScrollGesturesEnabled(): boolean;
							public setIndoorLevelPickerEnabled(param0: boolean): void;
							public setZoomControlsEnabled(param0: boolean): void;
							public setCompassEnabled(param0: boolean): void;
							public isMyLocationButtonEnabled(): boolean;
							public isZoomControlsEnabled(): boolean;
							public setMapToolbarEnabled(param0: boolean): void;
							public setTiltGesturesEnabled(param0: boolean): void;
							public isMapToolbarEnabled(): boolean;
							public setZoomGesturesEnabled(param0: boolean): void;
							public setMyLocationButtonEnabled(param0: boolean): void;
							public isIndoorLevelPickerEnabled(): boolean;
							public asBinder(): globalAndroid.os.IBinder;
							public setRotateGesturesEnabled(param0: boolean): void;
							public isCompassEnabled(): boolean;
							public setAllGesturesEnabled(param0: boolean): void;
							public isZoomGesturesEnabled(): boolean;
							public isTiltGesturesEnabled(): boolean;
							public isRotateGesturesEnabled(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class MapLifecycleDelegate extends java.lang.Object implements com.google.android.gms.dynamic.LifecycleDelegate {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.MapLifecycleDelegate>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.MapLifecycleDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getMapAsync(param0: com.google.android.gms.maps.OnMapReadyCallback): void;
								onInflate(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle): void;
								onCreate(param0: globalAndroid.os.Bundle): void;
								onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
								onStart(): void;
								onResume(): void;
								onPause(): void;
								onStop(): void;
								onDestroyView(): void;
								onDestroy(): void;
								onLowMemory(): void;
								onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
							});
							public constructor();
							public onDestroyView(): void;
							public onLowMemory(): void;
							public onStop(): void;
							public onInflate(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle): void;
							public onPause(): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onStart(): void;
							public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
							public onDestroy(): void;
							public getMapAsync(param0: com.google.android.gms.maps.OnMapReadyCallback): void;
							public onResume(): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class StreetViewLifecycleDelegate extends java.lang.Object implements com.google.android.gms.dynamic.LifecycleDelegate {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.StreetViewLifecycleDelegate>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.StreetViewLifecycleDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getStreetViewPanoramaAsync(param0: com.google.android.gms.maps.OnStreetViewPanoramaReadyCallback): void;
								onInflate(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle): void;
								onCreate(param0: globalAndroid.os.Bundle): void;
								onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
								onStart(): void;
								onResume(): void;
								onPause(): void;
								onStop(): void;
								onDestroyView(): void;
								onDestroy(): void;
								onLowMemory(): void;
								onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
							});
							public constructor();
							public onDestroyView(): void;
							public onLowMemory(): void;
							public onStop(): void;
							public getStreetViewPanoramaAsync(param0: com.google.android.gms.maps.OnStreetViewPanoramaReadyCallback): void;
							public onInflate(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle): void;
							public onPause(): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onStart(): void;
							public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
							public onDestroy(): void;
							public onResume(): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zza extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zza>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzaa extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.internal.zzz {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzaa>;
							public constructor();
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public onIndoorBuildingFocused(): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public pingBinder(): boolean;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzab extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzab>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzab interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zze(param0: any /* com.google.android.gms.maps.model.internal.zzp*/): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzac extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.internal.zzab {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzac>;
							public constructor();
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public pingBinder(): boolean;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzad extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzad>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzad interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzg(param0: any /* com.google.android.gms.maps.model.internal.zzp*/): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzae extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.internal.zzad {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzae>;
							public constructor();
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public pingBinder(): boolean;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzaf extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzaf>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzaf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzf(param0: any /* com.google.android.gms.maps.model.internal.zzp*/): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzag extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.internal.zzaf {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzag>;
							public constructor();
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public pingBinder(): boolean;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzah extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzah>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzah interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzd(param0: globalAndroid.location.Location): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzai extends com.google.android.gms.internal.zzed implements com.google.android.gms.maps.internal.zzah {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzai>;
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzaj extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzaj>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzaj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onMapClick(param0: com.google.android.gms.maps.model.LatLng): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
							public onMapClick(param0: com.google.android.gms.maps.model.LatLng): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzak extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.internal.zzaj {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzak>;
							public constructor();
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public onMapClick(param0: com.google.android.gms.maps.model.LatLng): void;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public pingBinder(): boolean;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzal extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzal>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzal interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onMapLoaded(): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
							public onMapLoaded(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzam extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.internal.zzal {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzam>;
							public constructor();
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public pingBinder(): boolean;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public onMapLoaded(): void;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzan extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzan>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzan interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onMapLongClick(param0: com.google.android.gms.maps.model.LatLng): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
							public onMapLongClick(param0: com.google.android.gms.maps.model.LatLng): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzao extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.internal.zzan {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzao>;
							public constructor();
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public pingBinder(): boolean;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public onMapLongClick(param0: com.google.android.gms.maps.model.LatLng): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzap extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzap>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: com.google.android.gms.maps.internal.IGoogleMapDelegate): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzaq extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.internal.zzap {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzaq>;
							public constructor();
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public pingBinder(): boolean;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzar extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzar>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzar interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: any /* com.google.android.gms.maps.model.internal.zzp*/): boolean;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzas extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.internal.zzar {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzas>;
							public constructor();
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public pingBinder(): boolean;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzat extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzat>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzat interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(param0: any /* com.google.android.gms.maps.model.internal.zzp*/): void;
								zzd(param0: any /* com.google.android.gms.maps.model.internal.zzp*/): void;
								zzc(param0: any /* com.google.android.gms.maps.model.internal.zzp*/): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzau extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.internal.zzat {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzau>;
							public constructor();
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public pingBinder(): boolean;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzav extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzav>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzav interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onMyLocationButtonClick(): boolean;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
							public onMyLocationButtonClick(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzaw extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.internal.zzav {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzaw>;
							public constructor();
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public onMyLocationButtonClick(): boolean;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public pingBinder(): boolean;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzax extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzax>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzax interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzF(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzay extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.internal.zzax {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzay>;
							public constructor();
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public pingBinder(): boolean;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzaz extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzaz>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzaz interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: com.google.android.gms.maps.model.PointOfInterest): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzb extends com.google.android.gms.internal.zzed implements com.google.android.gms.maps.internal.ICameraUpdateFactoryDelegate {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzb>;
							public asBinder(): globalAndroid.os.IBinder;
							public newLatLngBounds(param0: com.google.android.gms.maps.model.LatLngBounds, param1: number): com.google.android.gms.dynamic.IObjectWrapper;
							public scrollBy(param0: number, param1: number): com.google.android.gms.dynamic.IObjectWrapper;
							public newLatLngBoundsWithSize(param0: com.google.android.gms.maps.model.LatLngBounds, param1: number, param2: number, param3: number): com.google.android.gms.dynamic.IObjectWrapper;
							public zoomTo(param0: number): com.google.android.gms.dynamic.IObjectWrapper;
							public zoomBy(param0: number): com.google.android.gms.dynamic.IObjectWrapper;
							public newLatLngZoom(param0: com.google.android.gms.maps.model.LatLng, param1: number): com.google.android.gms.dynamic.IObjectWrapper;
							public zoomIn(): com.google.android.gms.dynamic.IObjectWrapper;
							public zoomByWithFocus(param0: number, param1: number, param2: number): com.google.android.gms.dynamic.IObjectWrapper;
							public newLatLng(param0: com.google.android.gms.maps.model.LatLng): com.google.android.gms.dynamic.IObjectWrapper;
							public zoomOut(): com.google.android.gms.dynamic.IObjectWrapper;
							public newCameraPosition(param0: com.google.android.gms.maps.model.CameraPosition): com.google.android.gms.dynamic.IObjectWrapper;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzba extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.internal.zzaz {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzba>;
							public constructor();
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public pingBinder(): boolean;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzbb extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbb>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzbb interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: any /* com.google.android.gms.maps.model.internal.zzs*/): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzbc extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.internal.zzbb {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbc>;
							public constructor();
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public pingBinder(): boolean;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzbd extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbd>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzbd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: com.google.android.gms.maps.model.internal.IPolylineDelegate): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzbe extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.internal.zzbd {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbe>;
							public constructor();
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public pingBinder(): boolean;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzbf extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbf>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzbf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onStreetViewPanoramaCameraChange(param0: com.google.android.gms.maps.model.StreetViewPanoramaCamera): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
							public onStreetViewPanoramaCameraChange(param0: com.google.android.gms.maps.model.StreetViewPanoramaCamera): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzbg extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.internal.zzbf {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbg>;
							public constructor();
							public onStreetViewPanoramaCameraChange(param0: com.google.android.gms.maps.model.StreetViewPanoramaCamera): void;
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public pingBinder(): boolean;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzbh extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbh>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzbh interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onStreetViewPanoramaChange(param0: com.google.android.gms.maps.model.StreetViewPanoramaLocation): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
							public onStreetViewPanoramaChange(param0: com.google.android.gms.maps.model.StreetViewPanoramaLocation): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzbi extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.internal.zzbh {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbi>;
							public constructor();
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public onStreetViewPanoramaChange(param0: com.google.android.gms.maps.model.StreetViewPanoramaLocation): void;
							public pingBinder(): boolean;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzbj extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbj>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzbj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onStreetViewPanoramaClick(param0: com.google.android.gms.maps.model.StreetViewPanoramaOrientation): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
							public onStreetViewPanoramaClick(param0: com.google.android.gms.maps.model.StreetViewPanoramaOrientation): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzbk extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.internal.zzbj {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbk>;
							public constructor();
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public pingBinder(): boolean;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public onStreetViewPanoramaClick(param0: com.google.android.gms.maps.model.StreetViewPanoramaOrientation): void;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzbl extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbl>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzbl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onStreetViewPanoramaLongClick(param0: com.google.android.gms.maps.model.StreetViewPanoramaOrientation): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
							public onStreetViewPanoramaLongClick(param0: com.google.android.gms.maps.model.StreetViewPanoramaOrientation): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzbm extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.internal.zzbl {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbm>;
							public constructor();
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public pingBinder(): boolean;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public onStreetViewPanoramaLongClick(param0: com.google.android.gms.maps.model.StreetViewPanoramaOrientation): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzbn extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbn>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzbn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: com.google.android.gms.maps.internal.IStreetViewPanoramaDelegate): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzbo extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.internal.zzbn {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbo>;
							public constructor();
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public pingBinder(): boolean;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzbp extends com.google.android.gms.internal.zzed implements com.google.android.gms.maps.internal.IProjectionDelegate {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbp>;
							public fromScreenLocation(param0: com.google.android.gms.dynamic.IObjectWrapper): com.google.android.gms.maps.model.LatLng;
							public asBinder(): globalAndroid.os.IBinder;
							public getVisibleRegion(): com.google.android.gms.maps.model.VisibleRegion;
							public toScreenLocation(param0: com.google.android.gms.maps.model.LatLng): com.google.android.gms.dynamic.IObjectWrapper;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzbq extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbq>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzbq interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onSnapshotReady(param0: globalAndroid.graphics.Bitmap): void;
								zzG(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
							public onSnapshotReady(param0: globalAndroid.graphics.Bitmap): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzbr extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.internal.zzbq {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbr>;
							public constructor();
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public pingBinder(): boolean;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public onSnapshotReady(param0: globalAndroid.graphics.Bitmap): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzbs extends com.google.android.gms.internal.zzed implements com.google.android.gms.maps.internal.IStreetViewPanoramaDelegate {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbs>;
							public enableStreetNames(param0: boolean): void;
							public isPanningGesturesEnabled(): boolean;
							public isStreetNamesEnabled(): boolean;
							public animateTo(param0: com.google.android.gms.maps.model.StreetViewPanoramaCamera, param1: number): void;
							public setOnStreetViewPanoramaClickListener(param0: any /* com.google.android.gms.maps.internal.zzbj*/): void;
							public isUserNavigationEnabled(): boolean;
							public setPosition(param0: com.google.android.gms.maps.model.LatLng): void;
							public enablePanning(param0: boolean): void;
							public setOnStreetViewPanoramaChangeListener(param0: any /* com.google.android.gms.maps.internal.zzbh*/): void;
							public setOnStreetViewPanoramaCameraChangeListener(param0: any /* com.google.android.gms.maps.internal.zzbf*/): void;
							public pointToOrientation(param0: com.google.android.gms.dynamic.IObjectWrapper): com.google.android.gms.maps.model.StreetViewPanoramaOrientation;
							public orientationToPoint(param0: com.google.android.gms.maps.model.StreetViewPanoramaOrientation): com.google.android.gms.dynamic.IObjectWrapper;
							public getStreetViewPanoramaLocation(): com.google.android.gms.maps.model.StreetViewPanoramaLocation;
							public setOnStreetViewPanoramaLongClickListener(param0: any /* com.google.android.gms.maps.internal.zzbl*/): void;
							public asBinder(): globalAndroid.os.IBinder;
							public enableUserNavigation(param0: boolean): void;
							public getPanoramaCamera(): com.google.android.gms.maps.model.StreetViewPanoramaCamera;
							public setPositionWithID(param0: string): void;
							public enableZoom(param0: boolean): void;
							public setPositionWithRadius(param0: com.google.android.gms.maps.model.LatLng, param1: number): void;
							public isZoomGesturesEnabled(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzbt extends com.google.android.gms.internal.zzed implements com.google.android.gms.maps.internal.IStreetViewPanoramaFragmentDelegate {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbt>;
							public isReady(): boolean;
							public onDestroy(): void;
							public onResume(): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
							public getStreetViewPanoramaAsync(param0: any /* com.google.android.gms.maps.internal.zzbn*/): void;
							public onCreateView(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.dynamic.IObjectWrapper, param2: globalAndroid.os.Bundle): com.google.android.gms.dynamic.IObjectWrapper;
							public onDestroyView(): void;
							public asBinder(): globalAndroid.os.IBinder;
							public getStreetViewPanorama(): com.google.android.gms.maps.internal.IStreetViewPanoramaDelegate;
							public onLowMemory(): void;
							public onInflate(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.maps.StreetViewPanoramaOptions, param2: globalAndroid.os.Bundle): void;
							public onPause(): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzbu extends com.google.android.gms.internal.zzed implements com.google.android.gms.maps.internal.IStreetViewPanoramaViewDelegate {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbu>;
							public getStreetViewPanoramaAsync(param0: any /* com.google.android.gms.maps.internal.zzbn*/): void;
							public asBinder(): globalAndroid.os.IBinder;
							public getStreetViewPanorama(): com.google.android.gms.maps.internal.IStreetViewPanoramaDelegate;
							public onLowMemory(): void;
							public onPause(): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onDestroy(): void;
							public getView(): com.google.android.gms.dynamic.IObjectWrapper;
							public onResume(): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzbv extends com.google.android.gms.internal.zzed implements com.google.android.gms.maps.internal.IUiSettingsDelegate {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbv>;
							public setScrollGesturesEnabled(param0: boolean): void;
							public isScrollGesturesEnabled(): boolean;
							public setIndoorLevelPickerEnabled(param0: boolean): void;
							public setZoomControlsEnabled(param0: boolean): void;
							public setCompassEnabled(param0: boolean): void;
							public isMyLocationButtonEnabled(): boolean;
							public isZoomControlsEnabled(): boolean;
							public setMapToolbarEnabled(param0: boolean): void;
							public setTiltGesturesEnabled(param0: boolean): void;
							public isMapToolbarEnabled(): boolean;
							public setZoomGesturesEnabled(param0: boolean): void;
							public setMyLocationButtonEnabled(param0: boolean): void;
							public isIndoorLevelPickerEnabled(): boolean;
							public asBinder(): globalAndroid.os.IBinder;
							public setRotateGesturesEnabled(param0: boolean): void;
							public isCompassEnabled(): boolean;
							public setAllGesturesEnabled(param0: boolean): void;
							public isZoomGesturesEnabled(): boolean;
							public isTiltGesturesEnabled(): boolean;
							public isRotateGesturesEnabled(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzbw extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzbx extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzbx>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzc extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzc>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzc interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onFinish(): void;
								onCancel(): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
							public onFinish(): void;
							public onCancel(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzd extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.internal.zzc {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzd>;
							public constructor();
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public pingBinder(): boolean;
							public onFinish(): void;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public onCancel(): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zze extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zze>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zze interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzH(param0: com.google.android.gms.dynamic.IObjectWrapper): com.google.android.gms.maps.internal.IMapFragmentDelegate;
								zza(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.maps.GoogleMapOptions): com.google.android.gms.maps.internal.IMapViewDelegate;
								zzwh(): com.google.android.gms.maps.internal.ICameraUpdateFactoryDelegate;
								zzwi(): any /* com.google.android.gms.maps.model.internal.zza*/;
								zzi(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: number): void;
								zza(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.maps.StreetViewPanoramaOptions): com.google.android.gms.maps.internal.IStreetViewPanoramaViewDelegate;
								zzI(param0: com.google.android.gms.dynamic.IObjectWrapper): com.google.android.gms.maps.internal.IStreetViewPanoramaFragmentDelegate;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzf extends com.google.android.gms.internal.zzed implements com.google.android.gms.maps.internal.zze {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzf>;
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzg extends com.google.android.gms.internal.zzed implements com.google.android.gms.maps.internal.IGoogleMapDelegate {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzg>;
							public getMapType(): number;
							public moveCamera(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
							public getUiSettings(): com.google.android.gms.maps.internal.IUiSettingsDelegate;
							public setOnCameraMoveStartedListener(param0: any /* com.google.android.gms.maps.internal.zzt*/): void;
							public onResume(): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
							public setOnCameraMoveCanceledListener(param0: any /* com.google.android.gms.maps.internal.zzp*/): void;
							public isBuildingsEnabled(): boolean;
							public onExitAmbient(): void;
							public animateCamera(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
							public setMapStyle(param0: com.google.android.gms.maps.model.MapStyleOptions): boolean;
							public addPolyline(param0: com.google.android.gms.maps.model.PolylineOptions): com.google.android.gms.maps.model.internal.IPolylineDelegate;
							public snapshotForTest(param0: any /* com.google.android.gms.maps.internal.zzbq*/): void;
							public setOnCameraChangeListener(param0: any /* com.google.android.gms.maps.internal.zzl*/): void;
							public isTrafficEnabled(): boolean;
							public setLatLngBoundsForCameraTarget(param0: com.google.android.gms.maps.model.LatLngBounds): void;
							public getMinZoomLevel(): number;
							public setContentDescription(param0: string): void;
							public stopAnimation(): void;
							public setOnPolygonClickListener(param0: any /* com.google.android.gms.maps.internal.zzbb*/): void;
							public setMyLocationEnabled(param0: boolean): void;
							public setLocationSource(param0: com.google.android.gms.maps.internal.ILocationSourceDelegate): void;
							public setOnInfoWindowCloseListener(param0: any /* com.google.android.gms.maps.internal.zzad*/): void;
							public asBinder(): globalAndroid.os.IBinder;
							public onLowMemory(): void;
							public addCircle(param0: com.google.android.gms.maps.model.CircleOptions): any /* com.google.android.gms.maps.model.internal.zzd*/;
							public setOnMyLocationButtonClickListener(param0: any /* com.google.android.gms.maps.internal.zzav*/): void;
							public onEnterAmbient(param0: globalAndroid.os.Bundle): void;
							public isIndoorEnabled(): boolean;
							public setMinZoomPreference(param0: number): void;
							public setOnIndoorStateChangeListener(param0: any /* com.google.android.gms.maps.internal.zzz*/): void;
							public animateCameraWithCallback(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: any /* com.google.android.gms.maps.internal.zzc*/): void;
							public setInfoWindowAdapter(param0: any /* com.google.android.gms.maps.internal.zzh*/): void;
							public setOnMyLocationChangeListener(param0: any /* com.google.android.gms.maps.internal.zzax*/): void;
							public getMyLocation(): globalAndroid.location.Location;
							public setOnMarkerClickListener(param0: any /* com.google.android.gms.maps.internal.zzar*/): void;
							public useViewLifecycleWhenInFragment(): boolean;
							public setOnMapLongClickListener(param0: any /* com.google.android.gms.maps.internal.zzan*/): void;
							public snapshot(param0: any /* com.google.android.gms.maps.internal.zzbq*/, param1: com.google.android.gms.dynamic.IObjectWrapper): void;
							public onDestroy(): void;
							public addPolygon(param0: com.google.android.gms.maps.model.PolygonOptions): any /* com.google.android.gms.maps.model.internal.zzs*/;
							public getFocusedBuilding(): any /* com.google.android.gms.maps.model.internal.zzj*/;
							public setOnCameraIdleListener(param0: any /* com.google.android.gms.maps.internal.zzn*/): void;
							public setBuildingsEnabled(param0: boolean): void;
							public setOnPoiClickListener(param0: any /* com.google.android.gms.maps.internal.zzaz*/): void;
							public animateCameraWithDurationAndCallback(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: number, param2: any /* com.google.android.gms.maps.internal.zzc*/): void;
							public setOnPolylineClickListener(param0: any /* com.google.android.gms.maps.internal.zzbd*/): void;
							public setOnGroundOverlayClickListener(param0: any /* com.google.android.gms.maps.internal.zzx*/): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onStart(): void;
							public setMaxZoomPreference(param0: number): void;
							public addMarker(param0: com.google.android.gms.maps.model.MarkerOptions): any /* com.google.android.gms.maps.model.internal.zzp*/;
							public setWatermarkEnabled(param0: boolean): void;
							public setOnMarkerDragListener(param0: any /* com.google.android.gms.maps.internal.zzat*/): void;
							public setOnInfoWindowLongClickListener(param0: any /* com.google.android.gms.maps.internal.zzaf*/): void;
							public onStop(): void;
							public setOnMapLoadedCallback(param0: any /* com.google.android.gms.maps.internal.zzal*/): void;
							public clear(): void;
							public setOnMapClickListener(param0: any /* com.google.android.gms.maps.internal.zzaj*/): void;
							public setTrafficEnabled(param0: boolean): void;
							public addGroundOverlay(param0: com.google.android.gms.maps.model.GroundOverlayOptions): any /* com.google.android.gms.maps.model.internal.zzg*/;
							public getMaxZoomLevel(): number;
							public setOnCameraMoveListener(param0: any /* com.google.android.gms.maps.internal.zzr*/): void;
							public setIndoorEnabled(param0: boolean): boolean;
							public resetMinMaxZoomPreference(): void;
							public getCameraPosition(): com.google.android.gms.maps.model.CameraPosition;
							public getProjection(): com.google.android.gms.maps.internal.IProjectionDelegate;
							public onPause(): void;
							public addTileOverlay(param0: com.google.android.gms.maps.model.TileOverlayOptions): any /* com.google.android.gms.maps.model.internal.zzw*/;
							public getMapAsync(param0: any /* com.google.android.gms.maps.internal.zzap*/): void;
							public setMapType(param0: number): void;
							public isMyLocationEnabled(): boolean;
							public setOnCircleClickListener(param0: any /* com.google.android.gms.maps.internal.zzv*/): void;
							public setPadding(param0: number, param1: number, param2: number, param3: number): void;
							public setOnInfoWindowClickListener(param0: any /* com.google.android.gms.maps.internal.zzab*/): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzh extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzh>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzh interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzh(param0: any /* com.google.android.gms.maps.model.internal.zzp*/): com.google.android.gms.dynamic.IObjectWrapper;
								zzi(param0: any /* com.google.android.gms.maps.model.internal.zzp*/): com.google.android.gms.dynamic.IObjectWrapper;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzi extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.internal.zzh {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzi>;
							public constructor();
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public pingBinder(): boolean;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzj extends com.google.android.gms.internal.zzed implements com.google.android.gms.maps.internal.IMapFragmentDelegate {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzj>;
							public onStop(): void;
							public isReady(): boolean;
							public onDestroy(): void;
							public onResume(): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
							public onInflate(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.maps.GoogleMapOptions, param2: globalAndroid.os.Bundle): void;
							public onCreateView(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: com.google.android.gms.dynamic.IObjectWrapper, param2: globalAndroid.os.Bundle): com.google.android.gms.dynamic.IObjectWrapper;
							public onDestroyView(): void;
							public asBinder(): globalAndroid.os.IBinder;
							public onLowMemory(): void;
							public getMap(): com.google.android.gms.maps.internal.IGoogleMapDelegate;
							public onPause(): void;
							public onExitAmbient(): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onEnterAmbient(param0: globalAndroid.os.Bundle): void;
							public onStart(): void;
							public getMapAsync(param0: any /* com.google.android.gms.maps.internal.zzap*/): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzk extends com.google.android.gms.internal.zzed implements com.google.android.gms.maps.internal.IMapViewDelegate {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzk>;
							public onStop(): void;
							public onDestroy(): void;
							public getView(): com.google.android.gms.dynamic.IObjectWrapper;
							public onResume(): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
							public asBinder(): globalAndroid.os.IBinder;
							public onLowMemory(): void;
							public getMap(): com.google.android.gms.maps.internal.IGoogleMapDelegate;
							public onPause(): void;
							public onExitAmbient(): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onEnterAmbient(param0: globalAndroid.os.Bundle): void;
							public onStart(): void;
							public getMapAsync(param0: any /* com.google.android.gms.maps.internal.zzap*/): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzl extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzl>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onCameraChange(param0: com.google.android.gms.maps.model.CameraPosition): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
							public onCameraChange(param0: com.google.android.gms.maps.model.CameraPosition): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzm extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.internal.zzl {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzm>;
							public constructor();
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public onCameraChange(param0: com.google.android.gms.maps.model.CameraPosition): void;
							public pingBinder(): boolean;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzn extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzn>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onCameraIdle(): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
							public onCameraIdle(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzo extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.internal.zzn {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzo>;
							public constructor();
							public onCameraIdle(): void;
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public pingBinder(): boolean;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzp extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzp>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onCameraMoveCanceled(): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
							public onCameraMoveCanceled(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzq extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.internal.zzp {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzq>;
							public constructor();
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public pingBinder(): boolean;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public onCameraMoveCanceled(): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzr extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzr>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzr interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onCameraMove(): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
							public onCameraMove(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzs extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.internal.zzr {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzs>;
							public constructor();
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public onCameraMove(): void;
							public pingBinder(): boolean;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzt extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzt>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzt interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onCameraMoveStarted(param0: number): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
							public onCameraMoveStarted(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzu extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.internal.zzt {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzu>;
							public constructor();
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public pingBinder(): boolean;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public onCameraMoveStarted(param0: number): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzv extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzv>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzv interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: any /* com.google.android.gms.maps.model.internal.zzd*/): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzw extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.internal.zzv {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzw>;
							public constructor();
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public pingBinder(): boolean;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzx extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzx>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzx interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: any /* com.google.android.gms.maps.model.internal.zzg*/): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export abstract class zzy extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.internal.zzx {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzy>;
							public constructor();
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public pingBinder(): boolean;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public getInterfaceDescriptor(): string;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module internal {
						export class zzz extends java.lang.Object implements globalAndroid.os.IInterface {
							public static class: java.lang.Class<com.google.android.gms.maps.internal.zzz>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.internal.zzz interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onIndoorBuildingFocused(): void;
								zza(param0: any /* com.google.android.gms.maps.model.internal.zzj*/): void;
								asBinder(): globalAndroid.os.IBinder;
							});
							public constructor();
							public asBinder(): globalAndroid.os.IBinder;
							public onIndoorBuildingFocused(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class BitmapDescriptor extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.model.BitmapDescriptor>;
							public constructor(param0: com.google.android.gms.dynamic.IObjectWrapper);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class BitmapDescriptorFactory extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.model.BitmapDescriptorFactory>;
							public static HUE_RED: number;
							public static HUE_ORANGE: number;
							public static HUE_YELLOW: number;
							public static HUE_GREEN: number;
							public static HUE_CYAN: number;
							public static HUE_AZURE: number;
							public static HUE_BLUE: number;
							public static HUE_VIOLET: number;
							public static HUE_MAGENTA: number;
							public static HUE_ROSE: number;
							public static fromResource(param0: number): com.google.android.gms.maps.model.BitmapDescriptor;
							public static defaultMarker(): com.google.android.gms.maps.model.BitmapDescriptor;
							public static fromBitmap(param0: globalAndroid.graphics.Bitmap): com.google.android.gms.maps.model.BitmapDescriptor;
							public static fromAsset(param0: string): com.google.android.gms.maps.model.BitmapDescriptor;
							public static fromFile(param0: string): com.google.android.gms.maps.model.BitmapDescriptor;
							public static fromPath(param0: string): com.google.android.gms.maps.model.BitmapDescriptor;
							public static defaultMarker(param0: number): com.google.android.gms.maps.model.BitmapDescriptor;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class ButtCap extends com.google.android.gms.maps.model.Cap {
							public static class: java.lang.Class<com.google.android.gms.maps.model.ButtCap>;
							public constructor();
							public constructor(param0: com.google.android.gms.maps.model.BitmapDescriptor, param1: number);
							public toString(): string;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class CameraPosition extends com.google.android.gms.common.internal.safeparcel.zza implements com.google.android.gms.common.internal.ReflectedParcelable {
							public static class: java.lang.Class<com.google.android.gms.maps.model.CameraPosition>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.CameraPosition>;
							public target: com.google.android.gms.maps.model.LatLng;
							public zoom: number;
							public tilt: number;
							public bearing: number;
							public constructor();
							public constructor(param0: com.google.android.gms.maps.model.LatLng, param1: number, param2: number, param3: number);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public static builder(): com.google.android.gms.maps.model.CameraPosition.Builder;
							public describeContents(): number;
							public static builder(param0: com.google.android.gms.maps.model.CameraPosition): com.google.android.gms.maps.model.CameraPosition.Builder;
							public static fromLatLngZoom(param0: com.google.android.gms.maps.model.LatLng, param1: number): com.google.android.gms.maps.model.CameraPosition;
							public toString(): string;
							public equals(param0: any): boolean;
							public static createFromAttributes(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): com.google.android.gms.maps.model.CameraPosition;
						}
						export module CameraPosition {
							export class Builder extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.maps.model.CameraPosition.Builder>;
								public target(param0: com.google.android.gms.maps.model.LatLng): com.google.android.gms.maps.model.CameraPosition.Builder;
								public tilt(param0: number): com.google.android.gms.maps.model.CameraPosition.Builder;
								public constructor();
								public bearing(param0: number): com.google.android.gms.maps.model.CameraPosition.Builder;
								public constructor(param0: com.google.android.gms.maps.model.CameraPosition);
								public build(): com.google.android.gms.maps.model.CameraPosition;
								public zoom(param0: number): com.google.android.gms.maps.model.CameraPosition.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class Cap extends com.google.android.gms.common.internal.safeparcel.zza {
							public static class: java.lang.Class<com.google.android.gms.maps.model.Cap>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.Cap>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: com.google.android.gms.maps.model.BitmapDescriptor, param1: number);
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class Circle extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.model.Circle>;
							public getRadius(): number;
							public constructor(param0: any /* com.google.android.gms.maps.model.internal.zzd*/);
							public hashCode(): number;
							public getId(): string;
							public setTag(param0: any): void;
							public remove(): void;
							public setStrokeColor(param0: number): void;
							public setClickable(param0: boolean): void;
							public isClickable(): boolean;
							public getStrokeColor(): number;
							public setFillColor(param0: number): void;
							public getTag(): any;
							public getStrokePattern(): java.util.List<com.google.android.gms.maps.model.PatternItem>;
							public getZIndex(): number;
							public setVisible(param0: boolean): void;
							public getCenter(): com.google.android.gms.maps.model.LatLng;
							public isVisible(): boolean;
							public setZIndex(param0: number): void;
							public getStrokeWidth(): number;
							public setCenter(param0: com.google.android.gms.maps.model.LatLng): void;
							public setStrokePattern(param0: java.util.List<com.google.android.gms.maps.model.PatternItem>): void;
							public setRadius(param0: number): void;
							public setStrokeWidth(param0: number): void;
							public getFillColor(): number;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class CircleOptions extends com.google.android.gms.common.internal.safeparcel.zza {
							public static class: java.lang.Class<com.google.android.gms.maps.model.CircleOptions>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.CircleOptions>;
							public constructor();
							public getRadius(): number;
							public strokeColor(param0: number): com.google.android.gms.maps.model.CircleOptions;
							public radius(param0: number): com.google.android.gms.maps.model.CircleOptions;
							public getCenter(): com.google.android.gms.maps.model.LatLng;
							public fillColor(param0: number): com.google.android.gms.maps.model.CircleOptions;
							public isVisible(): boolean;
							public isClickable(): boolean;
							public getStrokeColor(): number;
							public strokePattern(param0: java.util.List<com.google.android.gms.maps.model.PatternItem>): com.google.android.gms.maps.model.CircleOptions;
							public clickable(param0: boolean): com.google.android.gms.maps.model.CircleOptions;
							public visible(param0: boolean): com.google.android.gms.maps.model.CircleOptions;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getStrokeWidth(): number;
							public center(param0: com.google.android.gms.maps.model.LatLng): com.google.android.gms.maps.model.CircleOptions;
							public strokeWidth(param0: number): com.google.android.gms.maps.model.CircleOptions;
							public getStrokePattern(): java.util.List<com.google.android.gms.maps.model.PatternItem>;
							public zIndex(param0: number): com.google.android.gms.maps.model.CircleOptions;
							public getFillColor(): number;
							public getZIndex(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class CustomCap extends com.google.android.gms.maps.model.Cap {
							public static class: java.lang.Class<com.google.android.gms.maps.model.CustomCap>;
							public bitmapDescriptor: com.google.android.gms.maps.model.BitmapDescriptor;
							public refWidth: number;
							public constructor();
							public constructor(param0: com.google.android.gms.maps.model.BitmapDescriptor, param1: number);
							public toString(): string;
							public constructor(param0: number);
							public constructor(param0: com.google.android.gms.maps.model.BitmapDescriptor);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class Dash extends com.google.android.gms.maps.model.PatternItem {
							public static class: java.lang.Class<com.google.android.gms.maps.model.Dash>;
							public length: number;
							public constructor();
							public constructor(param0: number, param1: java.lang.Float);
							public toString(): string;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class Dot extends com.google.android.gms.maps.model.PatternItem {
							public static class: java.lang.Class<com.google.android.gms.maps.model.Dot>;
							public constructor();
							public constructor(param0: number, param1: java.lang.Float);
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class Gap extends com.google.android.gms.maps.model.PatternItem {
							public static class: java.lang.Class<com.google.android.gms.maps.model.Gap>;
							public length: number;
							public constructor();
							public constructor(param0: number, param1: java.lang.Float);
							public toString(): string;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class GroundOverlay extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.model.GroundOverlay>;
							public getWidth(): number;
							public hashCode(): number;
							public getId(): string;
							public setTag(param0: any): void;
							public setDimensions(param0: number): void;
							public remove(): void;
							public setClickable(param0: boolean): void;
							public setPositionFromBounds(param0: com.google.android.gms.maps.model.LatLngBounds): void;
							public getPosition(): com.google.android.gms.maps.model.LatLng;
							public isClickable(): boolean;
							public setTransparency(param0: number): void;
							public getBearing(): number;
							public getHeight(): number;
							public getTransparency(): number;
							public setBearing(param0: number): void;
							public getTag(): any;
							public getZIndex(): number;
							public setVisible(param0: boolean): void;
							public getBounds(): com.google.android.gms.maps.model.LatLngBounds;
							public isVisible(): boolean;
							public setPosition(param0: com.google.android.gms.maps.model.LatLng): void;
							public setDimensions(param0: number, param1: number): void;
							public setZIndex(param0: number): void;
							public constructor(param0: any /* com.google.android.gms.maps.model.internal.zzg*/);
							public equals(param0: any): boolean;
							public setImage(param0: com.google.android.gms.maps.model.BitmapDescriptor): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class GroundOverlayOptions extends com.google.android.gms.common.internal.safeparcel.zza {
							public static class: java.lang.Class<com.google.android.gms.maps.model.GroundOverlayOptions>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.GroundOverlayOptions>;
							public static NO_DIMENSION: number;
							public constructor();
							public getWidth(): number;
							public position(param0: com.google.android.gms.maps.model.LatLng, param1: number): com.google.android.gms.maps.model.GroundOverlayOptions;
							public zIndex(param0: number): com.google.android.gms.maps.model.GroundOverlayOptions;
							public getLocation(): com.google.android.gms.maps.model.LatLng;
							public visible(param0: boolean): com.google.android.gms.maps.model.GroundOverlayOptions;
							public getAnchorV(): number;
							public getBounds(): com.google.android.gms.maps.model.LatLngBounds;
							public isVisible(): boolean;
							public transparency(param0: number): com.google.android.gms.maps.model.GroundOverlayOptions;
							public isClickable(): boolean;
							public bearing(param0: number): com.google.android.gms.maps.model.GroundOverlayOptions;
							public anchor(param0: number, param1: number): com.google.android.gms.maps.model.GroundOverlayOptions;
							public getBearing(): number;
							public getImage(): com.google.android.gms.maps.model.BitmapDescriptor;
							public getHeight(): number;
							public getAnchorU(): number;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getTransparency(): number;
							public position(param0: com.google.android.gms.maps.model.LatLng, param1: number, param2: number): com.google.android.gms.maps.model.GroundOverlayOptions;
							public clickable(param0: boolean): com.google.android.gms.maps.model.GroundOverlayOptions;
							public getZIndex(): number;
							public image(param0: com.google.android.gms.maps.model.BitmapDescriptor): com.google.android.gms.maps.model.GroundOverlayOptions;
							public positionFromBounds(param0: com.google.android.gms.maps.model.LatLngBounds): com.google.android.gms.maps.model.GroundOverlayOptions;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class IndoorBuilding extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.model.IndoorBuilding>;
							public getDefaultLevelIndex(): number;
							public constructor(param0: any /* com.google.android.gms.maps.model.internal.zzj*/);
							public getActiveLevelIndex(): number;
							public getLevels(): java.util.List<com.google.android.gms.maps.model.IndoorLevel>;
							public hashCode(): number;
							public isUnderground(): boolean;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class IndoorLevel extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.model.IndoorLevel>;
							public activate(): void;
							public hashCode(): number;
							public getShortName(): string;
							public getName(): string;
							public equals(param0: any): boolean;
							public constructor(param0: any /* com.google.android.gms.maps.model.internal.zzm*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class JointType extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.model.JointType>;
							public static DEFAULT: number;
							public static BEVEL: number;
							public static ROUND: number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class LatLng extends com.google.android.gms.common.internal.safeparcel.zza implements com.google.android.gms.common.internal.ReflectedParcelable {
							public static class: java.lang.Class<com.google.android.gms.maps.model.LatLng>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.LatLng>;
							public latitude: number;
							public longitude: number;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: number, param1: number);
							public hashCode(): number;
							public describeContents(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class LatLngBounds extends com.google.android.gms.common.internal.safeparcel.zza implements com.google.android.gms.common.internal.ReflectedParcelable {
							public static class: java.lang.Class<com.google.android.gms.maps.model.LatLngBounds>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.LatLngBounds>;
							public southwest: com.google.android.gms.maps.model.LatLng;
							public northeast: com.google.android.gms.maps.model.LatLng;
							public constructor();
							public static createFromAttributes(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): com.google.android.gms.maps.model.LatLngBounds;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public describeContents(): number;
							public getCenter(): com.google.android.gms.maps.model.LatLng;
							public static builder(): com.google.android.gms.maps.model.LatLngBounds.Builder;
							public including(param0: com.google.android.gms.maps.model.LatLng): com.google.android.gms.maps.model.LatLngBounds;
							public toString(): string;
							public constructor(param0: com.google.android.gms.maps.model.LatLng, param1: com.google.android.gms.maps.model.LatLng);
							public equals(param0: any): boolean;
							public contains(param0: com.google.android.gms.maps.model.LatLng): boolean;
						}
						export module LatLngBounds {
							export class Builder extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.maps.model.LatLngBounds.Builder>;
								public build(): com.google.android.gms.maps.model.LatLngBounds;
								public include(param0: com.google.android.gms.maps.model.LatLng): com.google.android.gms.maps.model.LatLngBounds.Builder;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class MapStyleOptions extends com.google.android.gms.common.internal.safeparcel.zza {
							public static class: java.lang.Class<com.google.android.gms.maps.model.MapStyleOptions>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.MapStyleOptions>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: string);
							public static loadRawResourceStyle(param0: globalAndroid.content.Context, param1: number): com.google.android.gms.maps.model.MapStyleOptions;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class Marker extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.model.Marker>;
							public hashCode(): number;
							public getId(): string;
							public setTag(param0: any): void;
							public remove(): void;
							public setDraggable(param0: boolean): void;
							public getAlpha(): number;
							public getPosition(): com.google.android.gms.maps.model.LatLng;
							public isInfoWindowShown(): boolean;
							public setFlat(param0: boolean): void;
							public setIcon(param0: com.google.android.gms.maps.model.BitmapDescriptor): void;
							public isDraggable(): boolean;
							public setAnchor(param0: number, param1: number): void;
							public isFlat(): boolean;
							public getTag(): any;
							public hideInfoWindow(): void;
							public getZIndex(): number;
							public setRotation(param0: number): void;
							public showInfoWindow(): void;
							public constructor(param0: any /* com.google.android.gms.maps.model.internal.zzp*/);
							public setVisible(param0: boolean): void;
							public getTitle(): string;
							public isVisible(): boolean;
							public setInfoWindowAnchor(param0: number, param1: number): void;
							public setSnippet(param0: string): void;
							public setPosition(param0: com.google.android.gms.maps.model.LatLng): void;
							public getRotation(): number;
							public setZIndex(param0: number): void;
							public setTitle(param0: string): void;
							public setAlpha(param0: number): void;
							public getSnippet(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class MarkerOptions extends com.google.android.gms.common.internal.safeparcel.zza {
							public static class: java.lang.Class<com.google.android.gms.maps.model.MarkerOptions>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.MarkerOptions>;
							public anchor(param0: number, param1: number): com.google.android.gms.maps.model.MarkerOptions;
							public draggable(param0: boolean): com.google.android.gms.maps.model.MarkerOptions;
							public alpha(param0: number): com.google.android.gms.maps.model.MarkerOptions;
							public rotation(param0: number): com.google.android.gms.maps.model.MarkerOptions;
							public getAlpha(): number;
							public getPosition(): com.google.android.gms.maps.model.LatLng;
							public title(param0: string): com.google.android.gms.maps.model.MarkerOptions;
							public visible(param0: boolean): com.google.android.gms.maps.model.MarkerOptions;
							public isDraggable(): boolean;
							public isFlat(): boolean;
							public getZIndex(): number;
							public flat(param0: boolean): com.google.android.gms.maps.model.MarkerOptions;
							public constructor();
							public getAnchorV(): number;
							public snippet(param0: string): com.google.android.gms.maps.model.MarkerOptions;
							public getTitle(): string;
							public getIcon(): com.google.android.gms.maps.model.BitmapDescriptor;
							public isVisible(): boolean;
							public position(param0: com.google.android.gms.maps.model.LatLng): com.google.android.gms.maps.model.MarkerOptions;
							public getInfoWindowAnchorV(): number;
							public getRotation(): number;
							public getAnchorU(): number;
							public zIndex(param0: number): com.google.android.gms.maps.model.MarkerOptions;
							public infoWindowAnchor(param0: number, param1: number): com.google.android.gms.maps.model.MarkerOptions;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getSnippet(): string;
							public getInfoWindowAnchorU(): number;
							public icon(param0: com.google.android.gms.maps.model.BitmapDescriptor): com.google.android.gms.maps.model.MarkerOptions;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class PatternItem extends com.google.android.gms.common.internal.safeparcel.zza {
							public static class: java.lang.Class<com.google.android.gms.maps.model.PatternItem>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.PatternItem>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: number, param1: java.lang.Float);
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class PointOfInterest extends com.google.android.gms.common.internal.safeparcel.zza {
							public static class: java.lang.Class<com.google.android.gms.maps.model.PointOfInterest>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.PointOfInterest>;
							public latLng: com.google.android.gms.maps.model.LatLng;
							public placeId: string;
							public name: string;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: com.google.android.gms.maps.model.LatLng, param1: string, param2: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class Polygon extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.model.Polygon>;
							public hashCode(): number;
							public getId(): string;
							public getPoints(): java.util.List<com.google.android.gms.maps.model.LatLng>;
							public setTag(param0: any): void;
							public remove(): void;
							public getHoles(): java.util.List<java.util.List<com.google.android.gms.maps.model.LatLng>>;
							public setStrokeColor(param0: number): void;
							public setClickable(param0: boolean): void;
							public isClickable(): boolean;
							public getStrokeColor(): number;
							public setFillColor(param0: number): void;
							public getTag(): any;
							public getStrokePattern(): java.util.List<com.google.android.gms.maps.model.PatternItem>;
							public getZIndex(): number;
							public setHoles(param0: java.util.List<any>): void;
							public getStrokeJointType(): number;
							public setGeodesic(param0: boolean): void;
							public setVisible(param0: boolean): void;
							public isVisible(): boolean;
							public setPoints(param0: java.util.List<com.google.android.gms.maps.model.LatLng>): void;
							public setZIndex(param0: number): void;
							public isGeodesic(): boolean;
							public setStrokeJointType(param0: number): void;
							public getStrokeWidth(): number;
							public setStrokePattern(param0: java.util.List<com.google.android.gms.maps.model.PatternItem>): void;
							public setStrokeWidth(param0: number): void;
							public constructor(param0: any /* com.google.android.gms.maps.model.internal.zzs*/);
							public getFillColor(): number;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class PolygonOptions extends com.google.android.gms.common.internal.safeparcel.zza {
							public static class: java.lang.Class<com.google.android.gms.maps.model.PolygonOptions>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.PolygonOptions>;
							public getPoints(): java.util.List<com.google.android.gms.maps.model.LatLng>;
							public getHoles(): java.util.List<java.util.List<com.google.android.gms.maps.model.LatLng>>;
							public add(param0: native.Array<com.google.android.gms.maps.model.LatLng>): com.google.android.gms.maps.model.PolygonOptions;
							public isClickable(): boolean;
							public strokeWidth(param0: number): com.google.android.gms.maps.model.PolygonOptions;
							public getStrokeColor(): number;
							public addAll(param0: java.lang.Iterable<com.google.android.gms.maps.model.LatLng>): com.google.android.gms.maps.model.PolygonOptions;
							public clickable(param0: boolean): com.google.android.gms.maps.model.PolygonOptions;
							public getStrokePattern(): java.util.List<com.google.android.gms.maps.model.PatternItem>;
							public geodesic(param0: boolean): com.google.android.gms.maps.model.PolygonOptions;
							public getZIndex(): number;
							public constructor();
							public add(param0: com.google.android.gms.maps.model.LatLng): com.google.android.gms.maps.model.PolygonOptions;
							public getStrokeJointType(): number;
							public strokePattern(param0: java.util.List<com.google.android.gms.maps.model.PatternItem>): com.google.android.gms.maps.model.PolygonOptions;
							public visible(param0: boolean): com.google.android.gms.maps.model.PolygonOptions;
							public isVisible(): boolean;
							public isGeodesic(): boolean;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public zIndex(param0: number): com.google.android.gms.maps.model.PolygonOptions;
							public getStrokeWidth(): number;
							public addHole(param0: java.lang.Iterable<com.google.android.gms.maps.model.LatLng>): com.google.android.gms.maps.model.PolygonOptions;
							public strokeColor(param0: number): com.google.android.gms.maps.model.PolygonOptions;
							public strokeJointType(param0: number): com.google.android.gms.maps.model.PolygonOptions;
							public getFillColor(): number;
							public fillColor(param0: number): com.google.android.gms.maps.model.PolygonOptions;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class Polyline extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.model.Polyline>;
							public getWidth(): number;
							public hashCode(): number;
							public getId(): string;
							public getPoints(): java.util.List<com.google.android.gms.maps.model.LatLng>;
							public setTag(param0: any): void;
							public remove(): void;
							public setClickable(param0: boolean): void;
							public isClickable(): boolean;
							public getColor(): number;
							public getPattern(): java.util.List<com.google.android.gms.maps.model.PatternItem>;
							public constructor(param0: com.google.android.gms.maps.model.internal.IPolylineDelegate);
							public getJointType(): number;
							public getTag(): any;
							public setPattern(param0: java.util.List<com.google.android.gms.maps.model.PatternItem>): void;
							public getZIndex(): number;
							public setGeodesic(param0: boolean): void;
							public setVisible(param0: boolean): void;
							public isVisible(): boolean;
							public setPoints(param0: java.util.List<com.google.android.gms.maps.model.LatLng>): void;
							public setEndCap(param0: com.google.android.gms.maps.model.Cap): void;
							public setZIndex(param0: number): void;
							public isGeodesic(): boolean;
							public setColor(param0: number): void;
							public getStartCap(): com.google.android.gms.maps.model.Cap;
							public getEndCap(): com.google.android.gms.maps.model.Cap;
							public setJointType(param0: number): void;
							public setWidth(param0: number): void;
							public equals(param0: any): boolean;
							public setStartCap(param0: com.google.android.gms.maps.model.Cap): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class PolylineOptions extends com.google.android.gms.common.internal.safeparcel.zza {
							public static class: java.lang.Class<com.google.android.gms.maps.model.PolylineOptions>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.PolylineOptions>;
							public getWidth(): number;
							public pattern(param0: java.util.List<com.google.android.gms.maps.model.PatternItem>): com.google.android.gms.maps.model.PolylineOptions;
							public getPoints(): java.util.List<com.google.android.gms.maps.model.LatLng>;
							public startCap(param0: com.google.android.gms.maps.model.Cap): com.google.android.gms.maps.model.PolylineOptions;
							public isClickable(): boolean;
							public getColor(): number;
							public color(param0: number): com.google.android.gms.maps.model.PolylineOptions;
							public getPattern(): java.util.List<com.google.android.gms.maps.model.PatternItem>;
							public getJointType(): number;
							public jointType(param0: number): com.google.android.gms.maps.model.PolylineOptions;
							public add(param0: com.google.android.gms.maps.model.LatLng): com.google.android.gms.maps.model.PolylineOptions;
							public clickable(param0: boolean): com.google.android.gms.maps.model.PolylineOptions;
							public getZIndex(): number;
							public visible(param0: boolean): com.google.android.gms.maps.model.PolylineOptions;
							public zIndex(param0: number): com.google.android.gms.maps.model.PolylineOptions;
							public geodesic(param0: boolean): com.google.android.gms.maps.model.PolylineOptions;
							public constructor();
							public addAll(param0: java.lang.Iterable<com.google.android.gms.maps.model.LatLng>): com.google.android.gms.maps.model.PolylineOptions;
							public width(param0: number): com.google.android.gms.maps.model.PolylineOptions;
							public isVisible(): boolean;
							public isGeodesic(): boolean;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getStartCap(): com.google.android.gms.maps.model.Cap;
							public getEndCap(): com.google.android.gms.maps.model.Cap;
							public add(param0: native.Array<com.google.android.gms.maps.model.LatLng>): com.google.android.gms.maps.model.PolylineOptions;
							public endCap(param0: com.google.android.gms.maps.model.Cap): com.google.android.gms.maps.model.PolylineOptions;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class RoundCap extends com.google.android.gms.maps.model.Cap {
							public static class: java.lang.Class<com.google.android.gms.maps.model.RoundCap>;
							public constructor();
							public constructor(param0: com.google.android.gms.maps.model.BitmapDescriptor, param1: number);
							public toString(): string;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class RuntimeRemoteException extends java.lang.RuntimeException {
							public static class: java.lang.Class<com.google.android.gms.maps.model.RuntimeRemoteException>;
							public constructor();
							public constructor(param0: string);
							public constructor(param0: java.lang.Throwable);
							public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
							public constructor(param0: globalAndroid.os.RemoteException);
							public constructor(param0: string, param1: java.lang.Throwable);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class SquareCap extends com.google.android.gms.maps.model.Cap {
							public static class: java.lang.Class<com.google.android.gms.maps.model.SquareCap>;
							public constructor();
							public constructor(param0: com.google.android.gms.maps.model.BitmapDescriptor, param1: number);
							public toString(): string;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class StreetViewPanoramaCamera extends com.google.android.gms.common.internal.safeparcel.zza implements com.google.android.gms.common.internal.ReflectedParcelable {
							public static class: java.lang.Class<com.google.android.gms.maps.model.StreetViewPanoramaCamera>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.StreetViewPanoramaCamera>;
							public zoom: number;
							public tilt: number;
							public bearing: number;
							public constructor();
							public getOrientation(): com.google.android.gms.maps.model.StreetViewPanoramaOrientation;
							public static builder(param0: com.google.android.gms.maps.model.StreetViewPanoramaCamera): com.google.android.gms.maps.model.StreetViewPanoramaCamera.Builder;
							public constructor(param0: number, param1: number, param2: number);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public describeContents(): number;
							public static builder(): com.google.android.gms.maps.model.StreetViewPanoramaCamera.Builder;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export module StreetViewPanoramaCamera {
							export class Builder extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.maps.model.StreetViewPanoramaCamera.Builder>;
								public build(): com.google.android.gms.maps.model.StreetViewPanoramaCamera;
								public bearing(param0: number): com.google.android.gms.maps.model.StreetViewPanoramaCamera.Builder;
								public zoom(param0: number): com.google.android.gms.maps.model.StreetViewPanoramaCamera.Builder;
								public constructor();
								public constructor(param0: com.google.android.gms.maps.model.StreetViewPanoramaCamera);
								public orientation(param0: com.google.android.gms.maps.model.StreetViewPanoramaOrientation): com.google.android.gms.maps.model.StreetViewPanoramaCamera.Builder;
								public tilt(param0: number): com.google.android.gms.maps.model.StreetViewPanoramaCamera.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class StreetViewPanoramaLink extends com.google.android.gms.common.internal.safeparcel.zza {
							public static class: java.lang.Class<com.google.android.gms.maps.model.StreetViewPanoramaLink>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.StreetViewPanoramaLink>;
							public panoId: string;
							public bearing: number;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public toString(): string;
							public constructor(param0: string, param1: number);
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class StreetViewPanoramaLocation extends com.google.android.gms.common.internal.safeparcel.zza {
							public static class: java.lang.Class<com.google.android.gms.maps.model.StreetViewPanoramaLocation>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.StreetViewPanoramaLocation>;
							public links: native.Array<com.google.android.gms.maps.model.StreetViewPanoramaLink>;
							public position: com.google.android.gms.maps.model.LatLng;
							public panoId: string;
							public constructor();
							public constructor(param0: native.Array<com.google.android.gms.maps.model.StreetViewPanoramaLink>, param1: com.google.android.gms.maps.model.LatLng, param2: string);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class StreetViewPanoramaOrientation extends com.google.android.gms.common.internal.safeparcel.zza {
							public static class: java.lang.Class<com.google.android.gms.maps.model.StreetViewPanoramaOrientation>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.StreetViewPanoramaOrientation>;
							public tilt: number;
							public bearing: number;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: number, param1: number);
							public hashCode(): number;
							public static builder(param0: com.google.android.gms.maps.model.StreetViewPanoramaOrientation): com.google.android.gms.maps.model.StreetViewPanoramaOrientation.Builder;
							public static builder(): com.google.android.gms.maps.model.StreetViewPanoramaOrientation.Builder;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export module StreetViewPanoramaOrientation {
							export class Builder extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.maps.model.StreetViewPanoramaOrientation.Builder>;
								public build(): com.google.android.gms.maps.model.StreetViewPanoramaOrientation;
								public constructor();
								public tilt(param0: number): com.google.android.gms.maps.model.StreetViewPanoramaOrientation.Builder;
								public bearing(param0: number): com.google.android.gms.maps.model.StreetViewPanoramaOrientation.Builder;
								public constructor(param0: com.google.android.gms.maps.model.StreetViewPanoramaOrientation);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class Tile extends com.google.android.gms.common.internal.safeparcel.zza {
							public static class: java.lang.Class<com.google.android.gms.maps.model.Tile>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.Tile>;
							public width: number;
							public height: number;
							public data: native.Array<number>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: number, param1: number, param2: native.Array<number>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class TileOverlay extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.model.TileOverlay>;
							public setVisible(param0: boolean): void;
							public hashCode(): number;
							public getId(): string;
							public getFadeIn(): boolean;
							public constructor(param0: any /* com.google.android.gms.maps.model.internal.zzw*/);
							public remove(): void;
							public clearTileCache(): void;
							public isVisible(): boolean;
							public setZIndex(param0: number): void;
							public setTransparency(param0: number): void;
							public getTransparency(): number;
							public setFadeIn(param0: boolean): void;
							public getZIndex(): number;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class TileOverlayOptions extends com.google.android.gms.common.internal.safeparcel.zza {
							public static class: java.lang.Class<com.google.android.gms.maps.model.TileOverlayOptions>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.TileOverlayOptions>;
							public constructor();
							public fadeIn(param0: boolean): com.google.android.gms.maps.model.TileOverlayOptions;
							public transparency(param0: number): com.google.android.gms.maps.model.TileOverlayOptions;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getTransparency(): number;
							public getFadeIn(): boolean;
							public visible(param0: boolean): com.google.android.gms.maps.model.TileOverlayOptions;
							public tileProvider(param0: com.google.android.gms.maps.model.TileProvider): com.google.android.gms.maps.model.TileOverlayOptions;
							public isVisible(): boolean;
							public getZIndex(): number;
							public getTileProvider(): com.google.android.gms.maps.model.TileProvider;
							public zIndex(param0: number): com.google.android.gms.maps.model.TileOverlayOptions;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class TileProvider extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.maps.model.TileProvider>;
							/**
							 * Constructs a new instance of the com.google.android.gms.maps.model.TileProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getTile(param0: number, param1: number, param2: number): com.google.android.gms.maps.model.Tile;
								<clinit>(): void;
							});
							public constructor();
							public static NO_TILE: com.google.android.gms.maps.model.Tile;
							public getTile(param0: number, param1: number, param2: number): com.google.android.gms.maps.model.Tile;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export abstract class UrlTileProvider extends java.lang.Object implements com.google.android.gms.maps.model.TileProvider {
							public static class: java.lang.Class<com.google.android.gms.maps.model.UrlTileProvider>;
							public getTile(param0: number, param1: number, param2: number): com.google.android.gms.maps.model.Tile;
							public constructor(param0: number, param1: number);
							public getTileUrl(param0: number, param1: number, param2: number): java.net.URL;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class VisibleRegion extends com.google.android.gms.common.internal.safeparcel.zza {
							public static class: java.lang.Class<com.google.android.gms.maps.model.VisibleRegion>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.VisibleRegion>;
							public nearLeft: com.google.android.gms.maps.model.LatLng;
							public nearRight: com.google.android.gms.maps.model.LatLng;
							public farLeft: com.google.android.gms.maps.model.LatLng;
							public farRight: com.google.android.gms.maps.model.LatLng;
							public latLngBounds: com.google.android.gms.maps.model.LatLngBounds;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: com.google.android.gms.maps.model.LatLng, param1: com.google.android.gms.maps.model.LatLng, param2: com.google.android.gms.maps.model.LatLng, param3: com.google.android.gms.maps.model.LatLng, param4: com.google.android.gms.maps.model.LatLngBounds);
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export module internal {
							export class IPolylineDelegate extends java.lang.Object implements globalAndroid.os.IInterface {
								public static class: java.lang.Class<com.google.android.gms.maps.model.internal.IPolylineDelegate>;
								/**
								 * Constructs a new instance of the com.google.android.gms.maps.model.internal.IPolylineDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									remove(): void;
									getId(): string;
									setPoints(param0: java.util.List<com.google.android.gms.maps.model.LatLng>): void;
									getPoints(): java.util.List<com.google.android.gms.maps.model.LatLng>;
									setWidth(param0: number): void;
									getWidth(): number;
									setColor(param0: number): void;
									getColor(): number;
									setZIndex(param0: number): void;
									getZIndex(): number;
									setVisible(param0: boolean): void;
									isVisible(): boolean;
									setGeodesic(param0: boolean): void;
									isGeodesic(): boolean;
									equalsRemote(param0: com.google.android.gms.maps.model.internal.IPolylineDelegate): boolean;
									hashCodeRemote(): number;
									setClickable(param0: boolean): void;
									isClickable(): boolean;
									setStartCap(param0: com.google.android.gms.maps.model.Cap): void;
									getStartCap(): com.google.android.gms.maps.model.Cap;
									setEndCap(param0: com.google.android.gms.maps.model.Cap): void;
									getEndCap(): com.google.android.gms.maps.model.Cap;
									setJointType(param0: number): void;
									getJointType(): number;
									setPattern(param0: java.util.List<com.google.android.gms.maps.model.PatternItem>): void;
									getPattern(): java.util.List<com.google.android.gms.maps.model.PatternItem>;
									setTag(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
									getTag(): com.google.android.gms.dynamic.IObjectWrapper;
									asBinder(): globalAndroid.os.IBinder;
								});
								public constructor();
								public setGeodesic(param0: boolean): void;
								public setPoints(param0: java.util.List<com.google.android.gms.maps.model.LatLng>): void;
								public equalsRemote(param0: com.google.android.gms.maps.model.internal.IPolylineDelegate): boolean;
								public getWidth(): number;
								public setTag(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
								public setVisible(param0: boolean): void;
								public setClickable(param0: boolean): void;
								public getPoints(): java.util.List<com.google.android.gms.maps.model.LatLng>;
								public getColor(): number;
								public isVisible(): boolean;
								public getZIndex(): number;
								public getJointType(): number;
								public setStartCap(param0: com.google.android.gms.maps.model.Cap): void;
								public setWidth(param0: number): void;
								public setJointType(param0: number): void;
								public getTag(): com.google.android.gms.dynamic.IObjectWrapper;
								public isClickable(): boolean;
								public setEndCap(param0: com.google.android.gms.maps.model.Cap): void;
								public setColor(param0: number): void;
								public isGeodesic(): boolean;
								public getPattern(): java.util.List<com.google.android.gms.maps.model.PatternItem>;
								public setZIndex(param0: number): void;
								public hashCodeRemote(): number;
								public getStartCap(): com.google.android.gms.maps.model.Cap;
								public getId(): string;
								public getEndCap(): com.google.android.gms.maps.model.Cap;
								public asBinder(): globalAndroid.os.IBinder;
								public remove(): void;
								public setPattern(param0: java.util.List<com.google.android.gms.maps.model.PatternItem>): void;
							}
							export module IPolylineDelegate {
								export abstract class zza extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.model.internal.IPolylineDelegate {
									public static class: java.lang.Class<com.google.android.gms.maps.model.internal.IPolylineDelegate.zza>;
									public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
									public getZIndex(): number;
									public getId(): string;
									public setEndCap(param0: com.google.android.gms.maps.model.Cap): void;
									public getInterfaceDescriptor(): string;
									public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
									public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
									public setColor(param0: number): void;
									public hashCodeRemote(): number;
									public getPattern(): java.util.List<com.google.android.gms.maps.model.PatternItem>;
									public getEndCap(): com.google.android.gms.maps.model.Cap;
									public setVisible(param0: boolean): void;
									public isClickable(): boolean;
									public getStartCap(): com.google.android.gms.maps.model.Cap;
									public setWidth(param0: number): void;
									public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
									public setStartCap(param0: com.google.android.gms.maps.model.Cap): void;
									public setClickable(param0: boolean): void;
									public getPoints(): java.util.List<com.google.android.gms.maps.model.LatLng>;
									public getTag(): com.google.android.gms.dynamic.IObjectWrapper;
									public remove(): void;
									public getJointType(): number;
									public asBinder(): globalAndroid.os.IBinder;
									public isBinderAlive(): boolean;
									public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
									public getWidth(): number;
									public isGeodesic(): boolean;
									public setPoints(param0: java.util.List<com.google.android.gms.maps.model.LatLng>): void;
									public getColor(): number;
									public isVisible(): boolean;
									public setTag(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
									public setGeodesic(param0: boolean): void;
									public equalsRemote(param0: com.google.android.gms.maps.model.internal.IPolylineDelegate): boolean;
									public setZIndex(param0: number): void;
									public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
									public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
									public setJointType(param0: number): void;
									public setPattern(param0: java.util.List<com.google.android.gms.maps.model.PatternItem>): void;
									public pingBinder(): boolean;
									public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export module internal {
							export class zza extends java.lang.Object implements globalAndroid.os.IInterface {
								public static class: java.lang.Class<com.google.android.gms.maps.model.internal.zza>;
								/**
								 * Constructs a new instance of the com.google.android.gms.maps.model.internal.zza interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zzbo(param0: number): com.google.android.gms.dynamic.IObjectWrapper;
									zzdC(param0: string): com.google.android.gms.dynamic.IObjectWrapper;
									zzdD(param0: string): com.google.android.gms.dynamic.IObjectWrapper;
									zzwl(): com.google.android.gms.dynamic.IObjectWrapper;
									zze(param0: number): com.google.android.gms.dynamic.IObjectWrapper;
									zzd(param0: globalAndroid.graphics.Bitmap): com.google.android.gms.dynamic.IObjectWrapper;
									zzdE(param0: string): com.google.android.gms.dynamic.IObjectWrapper;
									asBinder(): globalAndroid.os.IBinder;
								});
								public constructor();
								public asBinder(): globalAndroid.os.IBinder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export module internal {
							export abstract class zzaa extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.model.internal.zzz {
								public static class: java.lang.Class<com.google.android.gms.maps.model.internal.zzaa>;
								public isBinderAlive(): boolean;
								public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
								public getTile(param0: number, param1: number, param2: number): com.google.android.gms.maps.model.Tile;
								public getInterfaceDescriptor(): string;
								public constructor();
								public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
								public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
								public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
								public pingBinder(): boolean;
								public asBinder(): globalAndroid.os.IBinder;
								public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
								public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export module internal {
							export class zzab extends com.google.android.gms.internal.zzed implements com.google.android.gms.maps.model.internal.zzz {
								public static class: java.lang.Class<com.google.android.gms.maps.model.internal.zzab>;
								public getTile(param0: number, param1: number, param2: number): com.google.android.gms.maps.model.Tile;
								public asBinder(): globalAndroid.os.IBinder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export module internal {
							export abstract class zzb extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.model.internal.zza {
								public static class: java.lang.Class<com.google.android.gms.maps.model.internal.zzb>;
								public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
								public isBinderAlive(): boolean;
								public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
								public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
								public getInterfaceDescriptor(): string;
								public pingBinder(): boolean;
								public asBinder(): globalAndroid.os.IBinder;
								public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
								public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
								public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export module internal {
							export class zzc extends com.google.android.gms.internal.zzed implements com.google.android.gms.maps.model.internal.zza {
								public static class: java.lang.Class<com.google.android.gms.maps.model.internal.zzc>;
								public asBinder(): globalAndroid.os.IBinder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export module internal {
							export class zzd extends java.lang.Object implements globalAndroid.os.IInterface {
								public static class: java.lang.Class<com.google.android.gms.maps.model.internal.zzd>;
								/**
								 * Constructs a new instance of the com.google.android.gms.maps.model.internal.zzd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									remove(): void;
									getId(): string;
									setCenter(param0: com.google.android.gms.maps.model.LatLng): void;
									getCenter(): com.google.android.gms.maps.model.LatLng;
									setRadius(param0: number): void;
									getRadius(): number;
									setStrokeWidth(param0: number): void;
									getStrokeWidth(): number;
									setStrokeColor(param0: number): void;
									getStrokeColor(): number;
									setFillColor(param0: number): void;
									getFillColor(): number;
									setZIndex(param0: number): void;
									getZIndex(): number;
									setVisible(param0: boolean): void;
									isVisible(): boolean;
									zzb(param0: any /* com.google.android.gms.maps.model.internal.zzd*/): boolean;
									hashCodeRemote(): number;
									setClickable(param0: boolean): void;
									isClickable(): boolean;
									setStrokePattern(param0: java.util.List<com.google.android.gms.maps.model.PatternItem>): void;
									getStrokePattern(): java.util.List<com.google.android.gms.maps.model.PatternItem>;
									setTag(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
									getTag(): com.google.android.gms.dynamic.IObjectWrapper;
									asBinder(): globalAndroid.os.IBinder;
								});
								public constructor();
								public getZIndex(): number;
								public getTag(): com.google.android.gms.dynamic.IObjectWrapper;
								public setStrokeColor(param0: number): void;
								public getStrokeColor(): number;
								public getStrokePattern(): java.util.List<com.google.android.gms.maps.model.PatternItem>;
								public isClickable(): boolean;
								public setCenter(param0: com.google.android.gms.maps.model.LatLng): void;
								public setStrokeWidth(param0: number): void;
								public setRadius(param0: number): void;
								public getRadius(): number;
								public setTag(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
								public setVisible(param0: boolean): void;
								public setClickable(param0: boolean): void;
								public setZIndex(param0: number): void;
								public setFillColor(param0: number): void;
								public hashCodeRemote(): number;
								public setStrokePattern(param0: java.util.List<com.google.android.gms.maps.model.PatternItem>): void;
								public getFillColor(): number;
								public getId(): string;
								public asBinder(): globalAndroid.os.IBinder;
								public remove(): void;
								public getCenter(): com.google.android.gms.maps.model.LatLng;
								public isVisible(): boolean;
								public getStrokeWidth(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export module internal {
							export abstract class zze extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.model.internal.zzd {
								public static class: java.lang.Class<com.google.android.gms.maps.model.internal.zze>;
								public isBinderAlive(): boolean;
								public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
								public getInterfaceDescriptor(): string;
								public setStrokeColor(param0: number): void;
								public getStrokeColor(): number;
								public getStrokePattern(): java.util.List<com.google.android.gms.maps.model.PatternItem>;
								public setCenter(param0: com.google.android.gms.maps.model.LatLng): void;
								public setStrokeWidth(param0: number): void;
								public setRadius(param0: number): void;
								public setTag(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
								public setVisible(param0: boolean): void;
								public setClickable(param0: boolean): void;
								public setFillColor(param0: number): void;
								public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
								public isVisible(): boolean;
								public getStrokeWidth(): number;
								public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
								public getZIndex(): number;
								public getTag(): com.google.android.gms.dynamic.IObjectWrapper;
								public isClickable(): boolean;
								public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
								public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
								public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public getRadius(): number;
								public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
								public setZIndex(param0: number): void;
								public hashCodeRemote(): number;
								public setStrokePattern(param0: java.util.List<com.google.android.gms.maps.model.PatternItem>): void;
								public pingBinder(): boolean;
								public getFillColor(): number;
								public getId(): string;
								public asBinder(): globalAndroid.os.IBinder;
								public remove(): void;
								public getCenter(): com.google.android.gms.maps.model.LatLng;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export module internal {
							export class zzf extends com.google.android.gms.internal.zzed implements com.google.android.gms.maps.model.internal.zzd {
								public static class: java.lang.Class<com.google.android.gms.maps.model.internal.zzf>;
								public getZIndex(): number;
								public getTag(): com.google.android.gms.dynamic.IObjectWrapper;
								public setStrokeColor(param0: number): void;
								public getStrokeColor(): number;
								public getStrokePattern(): java.util.List<com.google.android.gms.maps.model.PatternItem>;
								public isClickable(): boolean;
								public setCenter(param0: com.google.android.gms.maps.model.LatLng): void;
								public setStrokeWidth(param0: number): void;
								public setRadius(param0: number): void;
								public getRadius(): number;
								public setTag(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
								public setVisible(param0: boolean): void;
								public setClickable(param0: boolean): void;
								public setZIndex(param0: number): void;
								public setFillColor(param0: number): void;
								public hashCodeRemote(): number;
								public setStrokePattern(param0: java.util.List<com.google.android.gms.maps.model.PatternItem>): void;
								public getFillColor(): number;
								public getId(): string;
								public asBinder(): globalAndroid.os.IBinder;
								public remove(): void;
								public getCenter(): com.google.android.gms.maps.model.LatLng;
								public isVisible(): boolean;
								public getStrokeWidth(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export module internal {
							export class zzg extends java.lang.Object implements globalAndroid.os.IInterface {
								public static class: java.lang.Class<com.google.android.gms.maps.model.internal.zzg>;
								/**
								 * Constructs a new instance of the com.google.android.gms.maps.model.internal.zzg interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									remove(): void;
									getId(): string;
									setPosition(param0: com.google.android.gms.maps.model.LatLng): void;
									getPosition(): com.google.android.gms.maps.model.LatLng;
									setDimensions(param0: number): void;
									zzf(param0: number, param1: number): void;
									getWidth(): number;
									getHeight(): number;
									setPositionFromBounds(param0: com.google.android.gms.maps.model.LatLngBounds): void;
									getBounds(): com.google.android.gms.maps.model.LatLngBounds;
									setBearing(param0: number): void;
									getBearing(): number;
									setZIndex(param0: number): void;
									getZIndex(): number;
									setVisible(param0: boolean): void;
									isVisible(): boolean;
									setTransparency(param0: number): void;
									getTransparency(): number;
									zzb(param0: any /* com.google.android.gms.maps.model.internal.zzg*/): boolean;
									hashCodeRemote(): number;
									zzJ(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
									setClickable(param0: boolean): void;
									isClickable(): boolean;
									setTag(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
									getTag(): com.google.android.gms.dynamic.IObjectWrapper;
									asBinder(): globalAndroid.os.IBinder;
								});
								public constructor();
								public setDimensions(param0: number): void;
								public getZIndex(): number;
								public setBearing(param0: number): void;
								public setPositionFromBounds(param0: com.google.android.gms.maps.model.LatLngBounds): void;
								public setPosition(param0: com.google.android.gms.maps.model.LatLng): void;
								public getTag(): com.google.android.gms.dynamic.IObjectWrapper;
								public getTransparency(): number;
								public getHeight(): number;
								public getBounds(): com.google.android.gms.maps.model.LatLngBounds;
								public isClickable(): boolean;
								public getWidth(): number;
								public setTag(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
								public setVisible(param0: boolean): void;
								public setTransparency(param0: number): void;
								public setClickable(param0: boolean): void;
								public setZIndex(param0: number): void;
								public hashCodeRemote(): number;
								public getId(): string;
								public asBinder(): globalAndroid.os.IBinder;
								public remove(): void;
								public getPosition(): com.google.android.gms.maps.model.LatLng;
								public isVisible(): boolean;
								public getBearing(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export module internal {
							export abstract class zzh extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.model.internal.zzg {
								public static class: java.lang.Class<com.google.android.gms.maps.model.internal.zzh>;
								public setBearing(param0: number): void;
								public isBinderAlive(): boolean;
								public setPositionFromBounds(param0: com.google.android.gms.maps.model.LatLngBounds): void;
								public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
								public setPosition(param0: com.google.android.gms.maps.model.LatLng): void;
								public getInterfaceDescriptor(): string;
								public getHeight(): number;
								public getWidth(): number;
								public setTag(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
								public setVisible(param0: boolean): void;
								public setTransparency(param0: number): void;
								public setClickable(param0: boolean): void;
								public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
								public getPosition(): com.google.android.gms.maps.model.LatLng;
								public isVisible(): boolean;
								public getBearing(): number;
								public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
								public setDimensions(param0: number): void;
								public getZIndex(): number;
								public getTag(): com.google.android.gms.dynamic.IObjectWrapper;
								public getTransparency(): number;
								public getBounds(): com.google.android.gms.maps.model.LatLngBounds;
								public isClickable(): boolean;
								public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
								public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
								public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
								public setZIndex(param0: number): void;
								public hashCodeRemote(): number;
								public pingBinder(): boolean;
								public getId(): string;
								public asBinder(): globalAndroid.os.IBinder;
								public remove(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export module internal {
							export class zzi extends com.google.android.gms.internal.zzed implements com.google.android.gms.maps.model.internal.zzg {
								public static class: java.lang.Class<com.google.android.gms.maps.model.internal.zzi>;
								public setDimensions(param0: number): void;
								public getZIndex(): number;
								public setBearing(param0: number): void;
								public setPositionFromBounds(param0: com.google.android.gms.maps.model.LatLngBounds): void;
								public setPosition(param0: com.google.android.gms.maps.model.LatLng): void;
								public getTag(): com.google.android.gms.dynamic.IObjectWrapper;
								public getTransparency(): number;
								public getHeight(): number;
								public getBounds(): com.google.android.gms.maps.model.LatLngBounds;
								public isClickable(): boolean;
								public getWidth(): number;
								public setTag(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
								public setVisible(param0: boolean): void;
								public setTransparency(param0: number): void;
								public setClickable(param0: boolean): void;
								public setZIndex(param0: number): void;
								public hashCodeRemote(): number;
								public getId(): string;
								public asBinder(): globalAndroid.os.IBinder;
								public remove(): void;
								public getPosition(): com.google.android.gms.maps.model.LatLng;
								public isVisible(): boolean;
								public getBearing(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export module internal {
							export class zzj extends java.lang.Object implements globalAndroid.os.IInterface {
								public static class: java.lang.Class<com.google.android.gms.maps.model.internal.zzj>;
								/**
								 * Constructs a new instance of the com.google.android.gms.maps.model.internal.zzj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getActiveLevelIndex(): number;
									getDefaultLevelIndex(): number;
									getLevels(): java.util.List<globalAndroid.os.IBinder>;
									isUnderground(): boolean;
									zzb(param0: any /* com.google.android.gms.maps.model.internal.zzj*/): boolean;
									hashCodeRemote(): number;
									asBinder(): globalAndroid.os.IBinder;
								});
								public constructor();
								public getDefaultLevelIndex(): number;
								public getLevels(): java.util.List<globalAndroid.os.IBinder>;
								public getActiveLevelIndex(): number;
								public hashCodeRemote(): number;
								public isUnderground(): boolean;
								public asBinder(): globalAndroid.os.IBinder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export module internal {
							export abstract class zzk extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.model.internal.zzj {
								public static class: java.lang.Class<com.google.android.gms.maps.model.internal.zzk>;
								public getDefaultLevelIndex(): number;
								public isBinderAlive(): boolean;
								public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
								public getInterfaceDescriptor(): string;
								public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
								public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
								public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public getLevels(): java.util.List<globalAndroid.os.IBinder>;
								public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
								public getActiveLevelIndex(): number;
								public hashCodeRemote(): number;
								public pingBinder(): boolean;
								public isUnderground(): boolean;
								public asBinder(): globalAndroid.os.IBinder;
								public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
								public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export module internal {
							export class zzl extends com.google.android.gms.internal.zzed implements com.google.android.gms.maps.model.internal.zzj {
								public static class: java.lang.Class<com.google.android.gms.maps.model.internal.zzl>;
								public getDefaultLevelIndex(): number;
								public getLevels(): java.util.List<globalAndroid.os.IBinder>;
								public getActiveLevelIndex(): number;
								public hashCodeRemote(): number;
								public isUnderground(): boolean;
								public asBinder(): globalAndroid.os.IBinder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export module internal {
							export class zzm extends java.lang.Object implements globalAndroid.os.IInterface {
								public static class: java.lang.Class<com.google.android.gms.maps.model.internal.zzm>;
								/**
								 * Constructs a new instance of the com.google.android.gms.maps.model.internal.zzm interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getName(): string;
									getShortName(): string;
									activate(): void;
									zza(param0: any /* com.google.android.gms.maps.model.internal.zzm*/): boolean;
									hashCodeRemote(): number;
									asBinder(): globalAndroid.os.IBinder;
								});
								public constructor();
								public getShortName(): string;
								public getName(): string;
								public activate(): void;
								public hashCodeRemote(): number;
								public asBinder(): globalAndroid.os.IBinder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export module internal {
							export abstract class zzn extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.model.internal.zzm {
								public static class: java.lang.Class<com.google.android.gms.maps.model.internal.zzn>;
								public getShortName(): string;
								public isBinderAlive(): boolean;
								public getName(): string;
								public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
								public activate(): void;
								public getInterfaceDescriptor(): string;
								public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
								public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
								public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
								public hashCodeRemote(): number;
								public pingBinder(): boolean;
								public asBinder(): globalAndroid.os.IBinder;
								public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
								public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export module internal {
							export class zzo extends com.google.android.gms.internal.zzed implements com.google.android.gms.maps.model.internal.zzm {
								public static class: java.lang.Class<com.google.android.gms.maps.model.internal.zzo>;
								public getShortName(): string;
								public getName(): string;
								public activate(): void;
								public hashCodeRemote(): number;
								public asBinder(): globalAndroid.os.IBinder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export module internal {
							export class zzp extends java.lang.Object implements globalAndroid.os.IInterface {
								public static class: java.lang.Class<com.google.android.gms.maps.model.internal.zzp>;
								/**
								 * Constructs a new instance of the com.google.android.gms.maps.model.internal.zzp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									remove(): void;
									getId(): string;
									setPosition(param0: com.google.android.gms.maps.model.LatLng): void;
									getPosition(): com.google.android.gms.maps.model.LatLng;
									setTitle(param0: string): void;
									getTitle(): string;
									setSnippet(param0: string): void;
									getSnippet(): string;
									setDraggable(param0: boolean): void;
									isDraggable(): boolean;
									showInfoWindow(): void;
									hideInfoWindow(): void;
									isInfoWindowShown(): boolean;
									setVisible(param0: boolean): void;
									isVisible(): boolean;
									zzj(param0: any /* com.google.android.gms.maps.model.internal.zzp*/): boolean;
									hashCodeRemote(): number;
									zzK(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
									setAnchor(param0: number, param1: number): void;
									setFlat(param0: boolean): void;
									isFlat(): boolean;
									setRotation(param0: number): void;
									getRotation(): number;
									setInfoWindowAnchor(param0: number, param1: number): void;
									setAlpha(param0: number): void;
									getAlpha(): number;
									setZIndex(param0: number): void;
									getZIndex(): number;
									setTag(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
									getTag(): com.google.android.gms.dynamic.IObjectWrapper;
									asBinder(): globalAndroid.os.IBinder;
								});
								public constructor();
								public hideInfoWindow(): void;
								public setPosition(param0: com.google.android.gms.maps.model.LatLng): void;
								public isInfoWindowShown(): boolean;
								public setTag(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
								public setVisible(param0: boolean): void;
								public setAnchor(param0: number, param1: number): void;
								public getAlpha(): number;
								public getSnippet(): string;
								public getRotation(): number;
								public getPosition(): com.google.android.gms.maps.model.LatLng;
								public isVisible(): boolean;
								public isDraggable(): boolean;
								public getZIndex(): number;
								public isFlat(): boolean;
								public getTag(): com.google.android.gms.dynamic.IObjectWrapper;
								public showInfoWindow(): void;
								public setAlpha(param0: number): void;
								public getTitle(): string;
								public setSnippet(param0: string): void;
								public setDraggable(param0: boolean): void;
								public setFlat(param0: boolean): void;
								public setTitle(param0: string): void;
								public setInfoWindowAnchor(param0: number, param1: number): void;
								public setZIndex(param0: number): void;
								public hashCodeRemote(): number;
								public getId(): string;
								public setRotation(param0: number): void;
								public asBinder(): globalAndroid.os.IBinder;
								public remove(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export module internal {
							export abstract class zzq extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.model.internal.zzp {
								public static class: java.lang.Class<com.google.android.gms.maps.model.internal.zzq>;
								public isBinderAlive(): boolean;
								public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
								public hideInfoWindow(): void;
								public setPosition(param0: com.google.android.gms.maps.model.LatLng): void;
								public isInfoWindowShown(): boolean;
								public getInterfaceDescriptor(): string;
								public setTag(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
								public setVisible(param0: boolean): void;
								public setAnchor(param0: number, param1: number): void;
								public getAlpha(): number;
								public getSnippet(): string;
								public getRotation(): number;
								public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
								public getPosition(): com.google.android.gms.maps.model.LatLng;
								public isVisible(): boolean;
								public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
								public isDraggable(): boolean;
								public getZIndex(): number;
								public isFlat(): boolean;
								public getTag(): com.google.android.gms.dynamic.IObjectWrapper;
								public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
								public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
								public showInfoWindow(): void;
								public setAlpha(param0: number): void;
								public getTitle(): string;
								public setSnippet(param0: string): void;
								public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public setDraggable(param0: boolean): void;
								public setFlat(param0: boolean): void;
								public setTitle(param0: string): void;
								public setInfoWindowAnchor(param0: number, param1: number): void;
								public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
								public setZIndex(param0: number): void;
								public hashCodeRemote(): number;
								public pingBinder(): boolean;
								public getId(): string;
								public setRotation(param0: number): void;
								public asBinder(): globalAndroid.os.IBinder;
								public remove(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export module internal {
							export class zzr extends com.google.android.gms.internal.zzed implements com.google.android.gms.maps.model.internal.zzp {
								public static class: java.lang.Class<com.google.android.gms.maps.model.internal.zzr>;
								public hideInfoWindow(): void;
								public setPosition(param0: com.google.android.gms.maps.model.LatLng): void;
								public isInfoWindowShown(): boolean;
								public setTag(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
								public setVisible(param0: boolean): void;
								public setAnchor(param0: number, param1: number): void;
								public getAlpha(): number;
								public getSnippet(): string;
								public getRotation(): number;
								public getPosition(): com.google.android.gms.maps.model.LatLng;
								public isVisible(): boolean;
								public isDraggable(): boolean;
								public getZIndex(): number;
								public isFlat(): boolean;
								public getTag(): com.google.android.gms.dynamic.IObjectWrapper;
								public showInfoWindow(): void;
								public setAlpha(param0: number): void;
								public getTitle(): string;
								public setSnippet(param0: string): void;
								public setDraggable(param0: boolean): void;
								public setFlat(param0: boolean): void;
								public setTitle(param0: string): void;
								public setInfoWindowAnchor(param0: number, param1: number): void;
								public setZIndex(param0: number): void;
								public hashCodeRemote(): number;
								public getId(): string;
								public setRotation(param0: number): void;
								public asBinder(): globalAndroid.os.IBinder;
								public remove(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export module internal {
							export class zzs extends java.lang.Object implements globalAndroid.os.IInterface {
								public static class: java.lang.Class<com.google.android.gms.maps.model.internal.zzs>;
								/**
								 * Constructs a new instance of the com.google.android.gms.maps.model.internal.zzs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									remove(): void;
									getId(): string;
									setPoints(param0: java.util.List<com.google.android.gms.maps.model.LatLng>): void;
									getPoints(): java.util.List<com.google.android.gms.maps.model.LatLng>;
									setHoles(param0: java.util.List<any>): void;
									getHoles(): java.util.List<any>;
									setStrokeWidth(param0: number): void;
									getStrokeWidth(): number;
									setStrokeColor(param0: number): void;
									getStrokeColor(): number;
									setFillColor(param0: number): void;
									getFillColor(): number;
									setZIndex(param0: number): void;
									getZIndex(): number;
									setVisible(param0: boolean): void;
									isVisible(): boolean;
									setGeodesic(param0: boolean): void;
									isGeodesic(): boolean;
									zzb(param0: any /* com.google.android.gms.maps.model.internal.zzs*/): boolean;
									hashCodeRemote(): number;
									setClickable(param0: boolean): void;
									isClickable(): boolean;
									setStrokeJointType(param0: number): void;
									getStrokeJointType(): number;
									setStrokePattern(param0: java.util.List<com.google.android.gms.maps.model.PatternItem>): void;
									getStrokePattern(): java.util.List<com.google.android.gms.maps.model.PatternItem>;
									setTag(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
									getTag(): com.google.android.gms.dynamic.IObjectWrapper;
									asBinder(): globalAndroid.os.IBinder;
								});
								public constructor();
								public setGeodesic(param0: boolean): void;
								public setPoints(param0: java.util.List<com.google.android.gms.maps.model.LatLng>): void;
								public setHoles(param0: java.util.List<any>): void;
								public setStrokeColor(param0: number): void;
								public getStrokeColor(): number;
								public getStrokePattern(): java.util.List<com.google.android.gms.maps.model.PatternItem>;
								public setStrokeWidth(param0: number): void;
								public setTag(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
								public setVisible(param0: boolean): void;
								public setClickable(param0: boolean): void;
								public getPoints(): java.util.List<com.google.android.gms.maps.model.LatLng>;
								public setFillColor(param0: number): void;
								public isVisible(): boolean;
								public getStrokeWidth(): number;
								public setStrokeJointType(param0: number): void;
								public getZIndex(): number;
								public getHoles(): java.util.List<any>;
								public getTag(): com.google.android.gms.dynamic.IObjectWrapper;
								public getStrokeJointType(): number;
								public isClickable(): boolean;
								public isGeodesic(): boolean;
								public setZIndex(param0: number): void;
								public hashCodeRemote(): number;
								public setStrokePattern(param0: java.util.List<com.google.android.gms.maps.model.PatternItem>): void;
								public getFillColor(): number;
								public getId(): string;
								public asBinder(): globalAndroid.os.IBinder;
								public remove(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export module internal {
							export abstract class zzt extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.model.internal.zzs {
								public static class: java.lang.Class<com.google.android.gms.maps.model.internal.zzt>;
								public isBinderAlive(): boolean;
								public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
								public setGeodesic(param0: boolean): void;
								public setPoints(param0: java.util.List<com.google.android.gms.maps.model.LatLng>): void;
								public setHoles(param0: java.util.List<any>): void;
								public getInterfaceDescriptor(): string;
								public setStrokeColor(param0: number): void;
								public getStrokeColor(): number;
								public getStrokePattern(): java.util.List<com.google.android.gms.maps.model.PatternItem>;
								public setStrokeWidth(param0: number): void;
								public setTag(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
								public setVisible(param0: boolean): void;
								public setClickable(param0: boolean): void;
								public getPoints(): java.util.List<com.google.android.gms.maps.model.LatLng>;
								public setFillColor(param0: number): void;
								public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
								public isVisible(): boolean;
								public getStrokeWidth(): number;
								public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
								public setStrokeJointType(param0: number): void;
								public getZIndex(): number;
								public getHoles(): java.util.List<any>;
								public getTag(): com.google.android.gms.dynamic.IObjectWrapper;
								public getStrokeJointType(): number;
								public isClickable(): boolean;
								public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
								public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
								public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public isGeodesic(): boolean;
								public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
								public setZIndex(param0: number): void;
								public hashCodeRemote(): number;
								public setStrokePattern(param0: java.util.List<com.google.android.gms.maps.model.PatternItem>): void;
								public pingBinder(): boolean;
								public getFillColor(): number;
								public getId(): string;
								public asBinder(): globalAndroid.os.IBinder;
								public remove(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export module internal {
							export class zzu extends com.google.android.gms.internal.zzed implements com.google.android.gms.maps.model.internal.zzs {
								public static class: java.lang.Class<com.google.android.gms.maps.model.internal.zzu>;
								public setGeodesic(param0: boolean): void;
								public setPoints(param0: java.util.List<com.google.android.gms.maps.model.LatLng>): void;
								public setHoles(param0: java.util.List<any>): void;
								public setStrokeColor(param0: number): void;
								public getStrokeColor(): number;
								public getStrokePattern(): java.util.List<com.google.android.gms.maps.model.PatternItem>;
								public setStrokeWidth(param0: number): void;
								public setTag(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
								public setVisible(param0: boolean): void;
								public setClickable(param0: boolean): void;
								public getPoints(): java.util.List<com.google.android.gms.maps.model.LatLng>;
								public setFillColor(param0: number): void;
								public isVisible(): boolean;
								public getStrokeWidth(): number;
								public setStrokeJointType(param0: number): void;
								public getZIndex(): number;
								public getHoles(): java.util.List<any>;
								public getTag(): com.google.android.gms.dynamic.IObjectWrapper;
								public getStrokeJointType(): number;
								public isClickable(): boolean;
								public isGeodesic(): boolean;
								public setZIndex(param0: number): void;
								public hashCodeRemote(): number;
								public setStrokePattern(param0: java.util.List<com.google.android.gms.maps.model.PatternItem>): void;
								public getFillColor(): number;
								public getId(): string;
								public asBinder(): globalAndroid.os.IBinder;
								public remove(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export module internal {
							export class zzv extends com.google.android.gms.internal.zzed implements com.google.android.gms.maps.model.internal.IPolylineDelegate {
								public static class: java.lang.Class<com.google.android.gms.maps.model.internal.zzv>;
								public setGeodesic(param0: boolean): void;
								public setPoints(param0: java.util.List<com.google.android.gms.maps.model.LatLng>): void;
								public equalsRemote(param0: com.google.android.gms.maps.model.internal.IPolylineDelegate): boolean;
								public getWidth(): number;
								public setTag(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
								public setVisible(param0: boolean): void;
								public setClickable(param0: boolean): void;
								public getPoints(): java.util.List<com.google.android.gms.maps.model.LatLng>;
								public getColor(): number;
								public isVisible(): boolean;
								public getZIndex(): number;
								public getJointType(): number;
								public setStartCap(param0: com.google.android.gms.maps.model.Cap): void;
								public setWidth(param0: number): void;
								public setJointType(param0: number): void;
								public getTag(): com.google.android.gms.dynamic.IObjectWrapper;
								public isClickable(): boolean;
								public setEndCap(param0: com.google.android.gms.maps.model.Cap): void;
								public setColor(param0: number): void;
								public isGeodesic(): boolean;
								public getPattern(): java.util.List<com.google.android.gms.maps.model.PatternItem>;
								public setZIndex(param0: number): void;
								public hashCodeRemote(): number;
								public getStartCap(): com.google.android.gms.maps.model.Cap;
								public getId(): string;
								public getEndCap(): com.google.android.gms.maps.model.Cap;
								public asBinder(): globalAndroid.os.IBinder;
								public remove(): void;
								public setPattern(param0: java.util.List<com.google.android.gms.maps.model.PatternItem>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export module internal {
							export class zzw extends java.lang.Object implements globalAndroid.os.IInterface {
								public static class: java.lang.Class<com.google.android.gms.maps.model.internal.zzw>;
								/**
								 * Constructs a new instance of the com.google.android.gms.maps.model.internal.zzw interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									remove(): void;
									clearTileCache(): void;
									getId(): string;
									setZIndex(param0: number): void;
									getZIndex(): number;
									setVisible(param0: boolean): void;
									isVisible(): boolean;
									zza(param0: any /* com.google.android.gms.maps.model.internal.zzw*/): boolean;
									hashCodeRemote(): number;
									setFadeIn(param0: boolean): void;
									getFadeIn(): boolean;
									setTransparency(param0: number): void;
									getTransparency(): number;
									asBinder(): globalAndroid.os.IBinder;
								});
								public constructor();
								public getZIndex(): number;
								public getFadeIn(): boolean;
								public setFadeIn(param0: boolean): void;
								public clearTileCache(): void;
								public getTransparency(): number;
								public setVisible(param0: boolean): void;
								public setTransparency(param0: number): void;
								public setZIndex(param0: number): void;
								public hashCodeRemote(): number;
								public getId(): string;
								public asBinder(): globalAndroid.os.IBinder;
								public remove(): void;
								public isVisible(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export module internal {
							export abstract class zzx extends com.google.android.gms.internal.zzee implements com.google.android.gms.maps.model.internal.zzw {
								public static class: java.lang.Class<com.google.android.gms.maps.model.internal.zzx>;
								public getZIndex(): number;
								public isBinderAlive(): boolean;
								public getFadeIn(): boolean;
								public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
								public setFadeIn(param0: boolean): void;
								public clearTileCache(): void;
								public getInterfaceDescriptor(): string;
								public getTransparency(): number;
								public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
								public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
								public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
								public setVisible(param0: boolean): void;
								public setTransparency(param0: number): void;
								public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
								public setZIndex(param0: number): void;
								public hashCodeRemote(): number;
								public pingBinder(): boolean;
								public getId(): string;
								public asBinder(): globalAndroid.os.IBinder;
								public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
								public remove(): void;
								public isVisible(): boolean;
								public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export module internal {
							export class zzy extends com.google.android.gms.internal.zzed implements com.google.android.gms.maps.model.internal.zzw {
								public static class: java.lang.Class<com.google.android.gms.maps.model.internal.zzy>;
								public getZIndex(): number;
								public getFadeIn(): boolean;
								public setFadeIn(param0: boolean): void;
								public clearTileCache(): void;
								public getTransparency(): number;
								public setVisible(param0: boolean): void;
								public setTransparency(param0: number): void;
								public setZIndex(param0: number): void;
								public hashCodeRemote(): number;
								public getId(): string;
								public asBinder(): globalAndroid.os.IBinder;
								public remove(): void;
								public isVisible(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export module internal {
							export class zzz extends java.lang.Object implements globalAndroid.os.IInterface {
								public static class: java.lang.Class<com.google.android.gms.maps.model.internal.zzz>;
								/**
								 * Constructs a new instance of the com.google.android.gms.maps.model.internal.zzz interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getTile(param0: number, param1: number, param2: number): com.google.android.gms.maps.model.Tile;
									asBinder(): globalAndroid.os.IBinder;
								});
								public constructor();
								public getTile(param0: number, param1: number, param2: number): com.google.android.gms.maps.model.Tile;
								public asBinder(): globalAndroid.os.IBinder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zza extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.CameraPosition> {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zza>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzb extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.Cap> {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzb>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzc extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.CircleOptions> {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzc>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzd extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.GroundOverlayOptions> {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzd>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zze extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.LatLngBounds> {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zze>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzf extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.LatLng> {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzf>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzg extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.MapStyleOptions> {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzg>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzh extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.MarkerOptions> {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzh>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzi extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.PatternItem> {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzi>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzj extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.PointOfInterest> {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzj>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzk extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.PolygonOptions> {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzk>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzl extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.PolylineOptions> {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzl>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzm extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.StreetViewPanoramaCamera> {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzm>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzn extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.StreetViewPanoramaLink> {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzn>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzo extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.StreetViewPanoramaLocation> {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzo>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzp extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.StreetViewPanoramaOrientation> {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzp>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzq extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.Tile> {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzq>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzr extends java.lang.Object implements com.google.android.gms.maps.model.TileProvider {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzr>;
							public getTile(param0: number, param1: number, param2: number): com.google.android.gms.maps.model.Tile;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzs extends com.google.android.gms.maps.model.internal.zzaa {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzs>;
							public getInterfaceDescriptor(): string;
							public getTile(param0: number, param1: number, param2: number): com.google.android.gms.maps.model.Tile;
							public asBinder(): globalAndroid.os.IBinder;
							public isBinderAlive(): boolean;
							public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
							public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
							public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
							public pingBinder(): boolean;
							public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
							public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
							public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzt extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.TileOverlayOptions> {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzt>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export module model {
						export class zzu extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.model.VisibleRegion> {
							public static class: java.lang.Class<com.google.android.gms.maps.model.zzu>;
							public constructor();
							public newArray(param0: number): native.Array<any>;
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zza extends com.google.android.gms.maps.internal.zzaa {
						public static class: java.lang.Class<com.google.android.gms.maps.zza>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public onIndoorBuildingFocused(): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzaa extends com.google.android.gms.maps.internal.zzaq {
						public static class: java.lang.Class<com.google.android.gms.maps.zzaa>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzab extends com.google.android.gms.maps.internal.zzaq {
						public static class: java.lang.Class<com.google.android.gms.maps.zzab>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzac extends com.google.android.gms.maps.internal.zzbi {
						public static class: java.lang.Class<com.google.android.gms.maps.zzac>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public onStreetViewPanoramaChange(param0: com.google.android.gms.maps.model.StreetViewPanoramaLocation): void;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzad extends com.google.android.gms.maps.internal.zzbg {
						public static class: java.lang.Class<com.google.android.gms.maps.zzad>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public onStreetViewPanoramaCameraChange(param0: com.google.android.gms.maps.model.StreetViewPanoramaCamera): void;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzae extends com.google.android.gms.maps.internal.zzbk {
						public static class: java.lang.Class<com.google.android.gms.maps.zzae>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public onStreetViewPanoramaClick(param0: com.google.android.gms.maps.model.StreetViewPanoramaOrientation): void;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzaf extends com.google.android.gms.maps.internal.zzbm {
						public static class: java.lang.Class<com.google.android.gms.maps.zzaf>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public onStreetViewPanoramaLongClick(param0: com.google.android.gms.maps.model.StreetViewPanoramaOrientation): void;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzag extends com.google.android.gms.maps.internal.zzbo {
						public static class: java.lang.Class<com.google.android.gms.maps.zzag>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzah extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.StreetViewPanoramaOptions> {
						public static class: java.lang.Class<com.google.android.gms.maps.zzah>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzai extends com.google.android.gms.maps.internal.zzbo {
						public static class: java.lang.Class<com.google.android.gms.maps.zzai>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzaj extends com.google.android.gms.maps.internal.zzaq {
						public static class: java.lang.Class<com.google.android.gms.maps.zzaj>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzak extends com.google.android.gms.maps.internal.zzbo {
						public static class: java.lang.Class<com.google.android.gms.maps.zzak>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzb extends com.google.android.gms.maps.internal.zzas {
						public static class: java.lang.Class<com.google.android.gms.maps.zzb>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzc extends com.google.android.gms.maps.internal.zzau {
						public static class: java.lang.Class<com.google.android.gms.maps.zzc>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzd extends com.google.android.gms.maps.internal.zzac {
						public static class: java.lang.Class<com.google.android.gms.maps.zzd>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zze extends com.google.android.gms.maps.internal.zzag {
						public static class: java.lang.Class<com.google.android.gms.maps.zze>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzf extends com.google.android.gms.maps.internal.zzae {
						public static class: java.lang.Class<com.google.android.gms.maps.zzf>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzg extends com.google.android.gms.maps.internal.zzi {
						public static class: java.lang.Class<com.google.android.gms.maps.zzg>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzh extends com.google.android.gms.maps.internal.zzay {
						public static class: java.lang.Class<com.google.android.gms.maps.zzh>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzi extends com.google.android.gms.maps.internal.zzaw {
						public static class: java.lang.Class<com.google.android.gms.maps.zzi>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public onMyLocationButtonClick(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzj extends com.google.android.gms.maps.internal.zzam {
						public static class: java.lang.Class<com.google.android.gms.maps.zzj>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public onMapLoaded(): void;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzk extends com.google.android.gms.maps.internal.zzy {
						public static class: java.lang.Class<com.google.android.gms.maps.zzk>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzl extends com.google.android.gms.maps.internal.ILocationSourceDelegate.zza {
						public static class: java.lang.Class<com.google.android.gms.maps.zzl>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public activate(param0: any /* com.google.android.gms.maps.internal.zzah*/): void;
						public asBinder(): globalAndroid.os.IBinder;
						public deactivate(): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzm extends java.lang.Object implements com.google.android.gms.maps.LocationSource.OnLocationChangedListener {
						public static class: java.lang.Class<com.google.android.gms.maps.zzm>;
						public onLocationChanged(param0: globalAndroid.location.Location): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzn extends com.google.android.gms.maps.internal.zzw {
						public static class: java.lang.Class<com.google.android.gms.maps.zzn>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzo extends com.google.android.gms.maps.internal.zzbc {
						public static class: java.lang.Class<com.google.android.gms.maps.zzo>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzp extends com.google.android.gms.maps.internal.zzbe {
						public static class: java.lang.Class<com.google.android.gms.maps.zzp>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzq extends com.google.android.gms.maps.internal.zzbr {
						public static class: java.lang.Class<com.google.android.gms.maps.zzq>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public onSnapshotReady(param0: globalAndroid.graphics.Bitmap): void;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzr extends com.google.android.gms.maps.internal.zzba {
						public static class: java.lang.Class<com.google.android.gms.maps.zzr>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzs extends com.google.android.gms.maps.internal.zzm {
						public static class: java.lang.Class<com.google.android.gms.maps.zzs>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public onCameraChange(param0: com.google.android.gms.maps.model.CameraPosition): void;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzt extends com.google.android.gms.maps.internal.zzu {
						public static class: java.lang.Class<com.google.android.gms.maps.zzt>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public onCameraMoveStarted(param0: number): void;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzu extends com.google.android.gms.maps.internal.zzs {
						public static class: java.lang.Class<com.google.android.gms.maps.zzu>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public getInterfaceDescriptor(): string;
						public onCameraMove(): void;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzv extends com.google.android.gms.maps.internal.zzq {
						public static class: java.lang.Class<com.google.android.gms.maps.zzv>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public onCameraMoveCanceled(): void;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzw extends com.google.android.gms.maps.internal.zzo {
						public static class: java.lang.Class<com.google.android.gms.maps.zzw>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public onCameraIdle(): void;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzx extends com.google.android.gms.maps.internal.zzak {
						public static class: java.lang.Class<com.google.android.gms.maps.zzx>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public onMapClick(param0: com.google.android.gms.maps.model.LatLng): void;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzy extends com.google.android.gms.maps.internal.zzao {
						public static class: java.lang.Class<com.google.android.gms.maps.zzy>;
						public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						public getInterfaceDescriptor(): string;
						public onMapLongClick(param0: com.google.android.gms.maps.model.LatLng): void;
						public isBinderAlive(): boolean;
						public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
						public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
						public pingBinder(): boolean;
						public asBinder(): globalAndroid.os.IBinder;
						public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
						public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module maps {
					export class zzz extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.maps.GoogleMapOptions> {
						public static class: java.lang.Class<com.google.android.gms.maps.zzz>;
						public createFromParcel(param0: globalAndroid.os.Parcel): any;
						public constructor();
						public newArray(param0: number): native.Array<any>;
					}
				}
			}
		}
	}
}