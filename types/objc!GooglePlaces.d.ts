
declare class GMSAddressComponent extends NSObject {

    static alloc(): GMSAddressComponent; // inherited from NSObject

    static new(): GMSAddressComponent; // inherited from NSObject

	readonly name: string;

	readonly shortName: string;

	readonly type: string;

	readonly types: NSArray<string>;
}

declare class GMSAutocompleteFetcher extends NSObject {

    static alloc(): GMSAutocompleteFetcher; // inherited from NSObject

    static new(): GMSAutocompleteFetcher; // inherited from NSObject

	autocompleteFilter: GMSAutocompleteFilter;

	delegate: GMSAutocompleteFetcherDelegate;

	constructor(o: { filter: GMSAutocompleteFilter; });

	initWithFilter(filter: GMSAutocompleteFilter): this;

	provideSessionToken(sessionToken: GMSAutocompleteSessionToken): void;

	sourceTextHasChanged(text: string): void;
}

interface GMSAutocompleteFetcherDelegate extends NSObjectProtocol {

	didAutocompleteWithPredictions(predictions: NSArray<GMSAutocompletePrediction> | GMSAutocompletePrediction[]): void;

	didFailAutocompleteWithError(error: NSError): void;
}
declare var GMSAutocompleteFetcherDelegate: {

	prototype: GMSAutocompleteFetcherDelegate;
};

declare class GMSAutocompleteFilter extends NSObject {

    static alloc(): GMSAutocompleteFilter; // inherited from NSObject

    static new(): GMSAutocompleteFilter; // inherited from NSObject

	countries: NSArray<string>;

	country: string;

	locationBias: GMSPlaceLocationBias;

	locationRestriction: GMSPlaceLocationRestriction;

	origin: CLLocation;

	type: GMSPlacesAutocompleteTypeFilter;
}

declare class GMSAutocompleteMatchFragment extends NSObject {

    static alloc(): GMSAutocompleteMatchFragment; // inherited from NSObject

    static new(): GMSAutocompleteMatchFragment; // inherited from NSObject

	readonly length: number;

	readonly offset: number;
}

declare class GMSAutocompletePrediction extends NSObject {

    static alloc(): GMSAutocompletePrediction; // inherited from NSObject

    static new(): GMSAutocompletePrediction; // inherited from NSObject

	readonly attributedFullText: NSAttributedString;

	readonly attributedPrimaryText: NSAttributedString;

	readonly attributedSecondaryText: NSAttributedString;

	readonly distanceMeters: number;

	readonly placeID: string;

	readonly types: NSArray<string>;
}

declare class GMSAutocompleteResultsViewController extends UIViewController implements UISearchResultsUpdating {

    static alloc(): GMSAutocompleteResultsViewController; // inherited from NSObject

    static new(): GMSAutocompleteResultsViewController; // inherited from NSObject

	autocompleteFilter: GMSAutocompleteFilter;

	delegate: GMSAutocompleteResultsViewControllerDelegate;

	placeFields: GMSPlaceField;

	primaryTextColor: UIColor;

	primaryTextHighlightColor: UIColor;

	secondaryTextColor: UIColor;

	tableCellBackgroundColor: UIColor;

	tableCellSeparatorColor: UIColor;

	tintColor: UIColor;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	updateSearchResultsForSearchController(searchController: UISearchController): void;
}

interface GMSAutocompleteResultsViewControllerDelegate extends NSObjectProtocol {

	didRequestAutocompletePredictionsForResultsController?(resultsController: GMSAutocompleteResultsViewController): void;

	didUpdateAutocompletePredictionsForResultsController?(resultsController: GMSAutocompleteResultsViewController): void;

	resultsControllerDidAutocompleteWithPlace(resultsController: GMSAutocompleteResultsViewController, place: GMSPlace): void;

	resultsControllerDidFailAutocompleteWithError(resultsController: GMSAutocompleteResultsViewController, error: NSError): void;

	resultsControllerDidSelectPrediction?(resultsController: GMSAutocompleteResultsViewController, prediction: GMSAutocompletePrediction): boolean;
}
declare var GMSAutocompleteResultsViewControllerDelegate: {

	prototype: GMSAutocompleteResultsViewControllerDelegate;
};

declare class GMSAutocompleteSessionToken extends NSObject {

    static alloc(): GMSAutocompleteSessionToken; // inherited from NSObject

    static new(): GMSAutocompleteSessionToken; // inherited from NSObject
}

declare class GMSAutocompleteTableDataSource extends NSObject implements UITableViewDataSource, UITableViewDelegate {

    static alloc(): GMSAutocompleteTableDataSource; // inherited from NSObject

    static new(): GMSAutocompleteTableDataSource; // inherited from NSObject

	autocompleteFilter: GMSAutocompleteFilter;

	delegate: GMSAutocompleteTableDataSourceDelegate;

	placeFields: GMSPlaceField;

	primaryTextColor: UIColor;

	primaryTextHighlightColor: UIColor;

	secondaryTextColor: UIColor;

	tableCellBackgroundColor: UIColor;

	tableCellSeparatorColor: UIColor;

	tintColor: UIColor;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	clearResults(): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	sourceTextHasChanged(text: string): void;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewContextMenuConfigurationForRowAtIndexPathPoint(tableView: UITableView, indexPath: NSIndexPath, point: CGPoint): UIContextMenuConfiguration;

	tableViewDidBeginMultipleSelectionInteractionAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndMultipleSelectionInteraction(tableView: UITableView): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewPreviewForDismissingContextMenuWithConfiguration(tableView: UITableView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	tableViewPreviewForHighlightingContextMenuWithConfiguration(tableView: UITableView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewShouldBeginMultipleSelectionInteractionAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldSpringLoadRowAtIndexPathWithContext(tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayContextMenuWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillEndContextMenuInteractionWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating): void;

	tableViewWillPerformPreviewActionForMenuWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionCommitAnimating): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

interface GMSAutocompleteTableDataSourceDelegate extends NSObjectProtocol {

	didRequestAutocompletePredictionsForTableDataSource?(tableDataSource: GMSAutocompleteTableDataSource): void;

	didUpdateAutocompletePredictionsForTableDataSource?(tableDataSource: GMSAutocompleteTableDataSource): void;

	tableDataSourceDidAutocompleteWithPlace(tableDataSource: GMSAutocompleteTableDataSource, place: GMSPlace): void;

	tableDataSourceDidFailAutocompleteWithError(tableDataSource: GMSAutocompleteTableDataSource, error: NSError): void;

	tableDataSourceDidSelectPrediction?(tableDataSource: GMSAutocompleteTableDataSource, prediction: GMSAutocompletePrediction): boolean;
}
declare var GMSAutocompleteTableDataSourceDelegate: {

	prototype: GMSAutocompleteTableDataSourceDelegate;
};

declare class GMSAutocompleteViewController extends UIViewController {

    static alloc(): GMSAutocompleteViewController; // inherited from NSObject

    static new(): GMSAutocompleteViewController; // inherited from NSObject

	autocompleteFilter: GMSAutocompleteFilter;

	delegate: GMSAutocompleteViewControllerDelegate;

	placeFields: GMSPlaceField;

	primaryTextColor: UIColor;

	primaryTextHighlightColor: UIColor;

	secondaryTextColor: UIColor;

	tableCellBackgroundColor: UIColor;

	tableCellSeparatorColor: UIColor;

	tintColor: UIColor;
}

interface GMSAutocompleteViewControllerDelegate extends NSObjectProtocol {

	didRequestAutocompletePredictions?(viewController: GMSAutocompleteViewController): void;

	didUpdateAutocompletePredictions?(viewController: GMSAutocompleteViewController): void;

	viewControllerDidAutocompleteWithPlace(viewController: GMSAutocompleteViewController, place: GMSPlace): void;

	viewControllerDidFailAutocompleteWithError(viewController: GMSAutocompleteViewController, error: NSError): void;

	viewControllerDidSelectPrediction?(viewController: GMSAutocompleteViewController, prediction: GMSAutocompletePrediction): boolean;

	wasCancelled(viewController: GMSAutocompleteViewController): void;
}
declare var GMSAutocompleteViewControllerDelegate: {

	prototype: GMSAutocompleteViewControllerDelegate;
};

declare const enum GMSDayOfWeek {

	Sunday = 1,

	Monday = 2,

	Tuesday = 3,

	Wednesday = 4,

	Thursday = 5,

	Friday = 6,

	Saturday = 7
}

declare class GMSEvent extends NSObject {

    static alloc(): GMSEvent; // inherited from NSObject

    static new(): GMSEvent; // inherited from NSObject

	readonly day: GMSDayOfWeek;

	readonly time: GMSTime;
}

declare const enum GMSOpenNowStatus {

	Yes = 0,

	No = 1,

	Unknown = 2
}

declare class GMSOpeningHours extends NSObject {

    static alloc(): GMSOpeningHours; // inherited from NSObject

    static new(): GMSOpeningHours; // inherited from NSObject

	readonly periods: NSArray<GMSPeriod>;

	readonly weekdayText: NSArray<string>;
}

declare class GMSPeriod extends NSObject {

    static alloc(): GMSPeriod; // inherited from NSObject

    static new(): GMSPeriod; // inherited from NSObject

	readonly closeEvent: GMSEvent;

	readonly openEvent: GMSEvent;
}

declare class GMSPlace extends NSObject {

    static alloc(): GMSPlace; // inherited from NSObject

    static new(): GMSPlace; // inherited from NSObject

	readonly UTCOffsetMinutes: number;

	readonly addressComponents: NSArray<GMSAddressComponent>;

	readonly attributions: NSAttributedString;

	readonly businessStatus: GMSPlacesBusinessStatus;

	readonly coordinate: CLLocationCoordinate2D;

	readonly formattedAddress: string;

	readonly name: string;

	readonly openingHours: GMSOpeningHours;

	readonly phoneNumber: string;

	readonly photos: NSArray<GMSPlacePhotoMetadata>;

	readonly placeID: string;

	readonly plusCode: GMSPlusCode;

	readonly priceLevel: GMSPlacesPriceLevel;

	readonly rating: number;

	readonly types: NSArray<string>;

	readonly userRatingsTotal: number;

	readonly viewport: GMSCoordinateBounds;

	readonly website: NSURL;

	isOpen(): GMSPlaceOpenStatus;

	isOpenAtDate(date: Date): GMSPlaceOpenStatus;
}

declare const enum GMSPlaceField {

	Name = 1,

	PlaceID = 2,

	PlusCode = 4,

	Coordinate = 8,

	OpeningHours = 16,

	PhoneNumber = 32,

	FormattedAddress = 64,

	Rating = 128,

	PriceLevel = 256,

	Types = 512,

	Website = 1024,

	Viewport = 2048,

	AddressComponents = 4096,

	Photos = 8192,

	UserRatingsTotal = 16384,

	UTCOffsetMinutes = 32768,

	BusinessStatus = 65536,

	All = -1
}

declare class GMSPlaceLikelihood extends NSObject implements NSCopying {

    static alloc(): GMSPlaceLikelihood; // inherited from NSObject

    static new(): GMSPlaceLikelihood; // inherited from NSObject

	readonly likelihood: number;

	readonly place: GMSPlace;

	constructor(o: { place: GMSPlace; likelihood: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithPlaceLikelihood(place: GMSPlace, likelihood: number): this;
}

declare class GMSPlaceLikelihoodList extends NSObject {

    static alloc(): GMSPlaceLikelihoodList; // inherited from NSObject

    static new(): GMSPlaceLikelihoodList; // inherited from NSObject

	readonly attributions: NSAttributedString;

	likelihoods: NSArray<GMSPlaceLikelihood>;
}

interface GMSPlaceLocationBias extends NSCopying, NSObjectProtocol {

	locationBiasURLQueryItem(): NSURLQueryItem;
}
declare var GMSPlaceLocationBias: {

	prototype: GMSPlaceLocationBias;
};

interface GMSPlaceLocationRestriction extends NSCopying, NSObjectProtocol {

	locationRestrictionURLQueryItem(): NSURLQueryItem;
}
declare var GMSPlaceLocationRestriction: {

	prototype: GMSPlaceLocationRestriction;
};

declare const enum GMSPlaceOpenStatus {

	Unknown = 0,

	Open = 1,

	Closed = 2
}

declare class GMSPlacePhotoMetadata extends NSObject {

    static alloc(): GMSPlacePhotoMetadata; // inherited from NSObject

    static new(): GMSPlacePhotoMetadata; // inherited from NSObject

	readonly attributions: NSAttributedString;

	readonly maxSize: CGSize;
}

declare class GMSPlacePhotoMetadataList extends NSObject {

    static alloc(): GMSPlacePhotoMetadataList; // inherited from NSObject

    static new(): GMSPlacePhotoMetadataList; // inherited from NSObject

	readonly results: NSArray<GMSPlacePhotoMetadata>;
}

declare function GMSPlaceRectangularLocationOption(northEastBounds: CLLocationCoordinate2D, southWestBounds: CLLocationCoordinate2D): any;

declare const enum GMSPlacesAutocompleteTypeFilter {

	kGMSPlacesAutocompleteTypeFilterNoFilter = 0,

	kGMSPlacesAutocompleteTypeFilterGeocode = 1,

	kGMSPlacesAutocompleteTypeFilterAddress = 2,

	kGMSPlacesAutocompleteTypeFilterEstablishment = 3,

	kGMSPlacesAutocompleteTypeFilterRegion = 4,

	kGMSPlacesAutocompleteTypeFilterCity = 5
}

declare const enum GMSPlacesBusinessStatus {

	Unknown = 0,

	Operational = 1,

	ClosedTemporarily = 2,

	ClosedPermanently = 3
}

declare class GMSPlacesClient extends NSObject {

    static SDKLongVersion(): string;

    static SDKVersion(): string;

    static alloc(): GMSPlacesClient; // inherited from NSObject

    static new(): GMSPlacesClient; // inherited from NSObject

    static openSourceLicenseInfo(): string;

    static provideAPIKey(key: string): boolean;

    static sharedClient(): GMSPlacesClient;

    currentPlaceWithCallback(callback: (p1: GMSPlaceLikelihoodList, p2: NSError) => void): void;

    fetchPlaceFromPlaceIDPlaceFieldsSessionTokenCallback(placeID: string, placeFields: GMSPlaceField, sessionToken: GMSAutocompleteSessionToken, callback: (p1: GMSPlace, p2: NSError) => void): void;

    findAutocompletePredictionsFromQueryFilterSessionTokenCallback(query: string, filter: GMSAutocompleteFilter, sessionToken: GMSAutocompleteSessionToken, callback: (p1: NSArray<GMSAutocompletePrediction>, p2: NSError) => void): void;

    findPlaceLikelihoodsFromCurrentLocationWithPlaceFieldsCallback(placeFields: GMSPlaceField, callback: (p1: NSArray<GMSPlaceLikelihood>, p2: NSError) => void): void;

    loadPlacePhotoCallback(photoMetadata: GMSPlacePhotoMetadata, callback: (p1: UIImage, p2: NSError) => void): void;

    loadPlacePhotoConstrainedToSizeScaleCallback(photoMetadata: GMSPlacePhotoMetadata, maxSize: CGSize, scale: number, callback: (p1: UIImage, p2: NSError) => void): void;

    lookUpPhotosForPlaceIDCallback(placeID: string, callback: (p1: GMSPlacePhotoMetadataList, p2: NSError) => void): void;

    lookUpPlaceIDCallback(placeID: string, callback: (p1: GMSPlace, p2: NSError) => void): void;
}

declare const enum GMSPlacesErrorCode {

	kGMSPlacesNetworkError = -1,

	kGMSPlacesServerError = -2,

	kGMSPlacesInternalError = -3,

	kGMSPlacesKeyInvalid = -4,

	kGMSPlacesKeyExpired = -5,

	kGMSPlacesUsageLimitExceeded = -6,

	kGMSPlacesRateLimitExceeded = -7,

	kGMSPlacesDeviceRateLimitExceeded = -8,

	kGMSPlacesAccessNotConfigured = -9,

	kGMSPlacesIncorrectBundleIdentifier = -10,

	kGMSPlacesLocationError = -11,

	kGMSPlacesInvalidRequest = -12
}

declare const enum GMSPlacesPriceLevel {

	kGMSPlacesPriceLevelUnknown = -1,

	kGMSPlacesPriceLevelFree = 0,

	kGMSPlacesPriceLevelCheap = 1,

	kGMSPlacesPriceLevelMedium = 2,

	kGMSPlacesPriceLevelHigh = 3,

	kGMSPlacesPriceLevelExpensive = 4
}

declare class GMSPlusCode extends NSObject {

    static alloc(): GMSPlusCode; // inherited from NSObject

    static new(): GMSPlusCode; // inherited from NSObject

	readonly compoundCode: string;

	readonly globalCode: string;
}

declare class GMSTime extends NSObject {

    static alloc(): GMSTime; // inherited from NSObject

    static new(): GMSTime; // inherited from NSObject

	readonly hour: number;

	readonly minute: number;
}

declare let kGMSAutocompleteMatchAttribute: string;

declare let kGMSPlaceTypeAccounting: string;

declare let kGMSPlaceTypeAdministrativeAreaLevel1: string;

declare let kGMSPlaceTypeAdministrativeAreaLevel2: string;

declare let kGMSPlaceTypeAdministrativeAreaLevel3: string;

declare let kGMSPlaceTypeAdministrativeAreaLevel4: string;

declare let kGMSPlaceTypeAdministrativeAreaLevel5: string;

declare let kGMSPlaceTypeAirport: string;

declare let kGMSPlaceTypeAmusementPark: string;

declare let kGMSPlaceTypeAquarium: string;

declare let kGMSPlaceTypeArtGallery: string;

declare let kGMSPlaceTypeAtm: string;

declare let kGMSPlaceTypeBakery: string;

declare let kGMSPlaceTypeBank: string;

declare let kGMSPlaceTypeBar: string;

declare let kGMSPlaceTypeBeautySalon: string;

declare let kGMSPlaceTypeBicycleStore: string;

declare let kGMSPlaceTypeBookStore: string;

declare let kGMSPlaceTypeBowlingAlley: string;

declare let kGMSPlaceTypeBusStation: string;

declare let kGMSPlaceTypeCafe: string;

declare let kGMSPlaceTypeCampground: string;

declare let kGMSPlaceTypeCarDealer: string;

declare let kGMSPlaceTypeCarRental: string;

declare let kGMSPlaceTypeCarRepair: string;

declare let kGMSPlaceTypeCarWash: string;

declare let kGMSPlaceTypeCasino: string;

declare let kGMSPlaceTypeCemetery: string;

declare let kGMSPlaceTypeChurch: string;

declare let kGMSPlaceTypeCityHall: string;

declare let kGMSPlaceTypeClothingStore: string;

declare let kGMSPlaceTypeColloquialArea: string;

declare let kGMSPlaceTypeConvenienceStore: string;

declare let kGMSPlaceTypeCountry: string;

declare let kGMSPlaceTypeCourthouse: string;

declare let kGMSPlaceTypeDentist: string;

declare let kGMSPlaceTypeDepartmentStore: string;

declare let kGMSPlaceTypeDoctor: string;

declare let kGMSPlaceTypeDrugstore: string;

declare let kGMSPlaceTypeElectrician: string;

declare let kGMSPlaceTypeElectronicsStore: string;

declare let kGMSPlaceTypeEmbassy: string;

declare let kGMSPlaceTypeEstablishment: string;

declare let kGMSPlaceTypeFinance: string;

declare let kGMSPlaceTypeFireStation: string;

declare let kGMSPlaceTypeFloor: string;

declare let kGMSPlaceTypeFlorist: string;

declare let kGMSPlaceTypeFood: string;

declare let kGMSPlaceTypeFuneralHome: string;

declare let kGMSPlaceTypeFurnitureStore: string;

declare let kGMSPlaceTypeGasStation: string;

declare let kGMSPlaceTypeGeneralContractor: string;

declare let kGMSPlaceTypeGeocode: string;

declare let kGMSPlaceTypeGroceryOrSupermarket: string;

declare let kGMSPlaceTypeGym: string;

declare let kGMSPlaceTypeHairCare: string;

declare let kGMSPlaceTypeHardwareStore: string;

declare let kGMSPlaceTypeHealth: string;

declare let kGMSPlaceTypeHinduTemple: string;

declare let kGMSPlaceTypeHomeGoodsStore: string;

declare let kGMSPlaceTypeHospital: string;

declare let kGMSPlaceTypeInsuranceAgency: string;

declare let kGMSPlaceTypeIntersection: string;

declare let kGMSPlaceTypeJewelryStore: string;

declare let kGMSPlaceTypeLaundry: string;

declare let kGMSPlaceTypeLawyer: string;

declare let kGMSPlaceTypeLibrary: string;

declare let kGMSPlaceTypeLightRailStation: string;

declare let kGMSPlaceTypeLiquorStore: string;

declare let kGMSPlaceTypeLocalGovernmentOffice: string;

declare let kGMSPlaceTypeLocality: string;

declare let kGMSPlaceTypeLocksmith: string;

declare let kGMSPlaceTypeLodging: string;

declare let kGMSPlaceTypeMealDelivery: string;

declare let kGMSPlaceTypeMealTakeaway: string;

declare let kGMSPlaceTypeMosque: string;

declare let kGMSPlaceTypeMovieRental: string;

declare let kGMSPlaceTypeMovieTheater: string;

declare let kGMSPlaceTypeMovingCompany: string;

declare let kGMSPlaceTypeMuseum: string;

declare let kGMSPlaceTypeNaturalFeature: string;

declare let kGMSPlaceTypeNeighborhood: string;

declare let kGMSPlaceTypeNightClub: string;

declare let kGMSPlaceTypePainter: string;

declare let kGMSPlaceTypePark: string;

declare let kGMSPlaceTypeParking: string;

declare let kGMSPlaceTypePetStore: string;

declare let kGMSPlaceTypePharmacy: string;

declare let kGMSPlaceTypePhysiotherapist: string;

declare let kGMSPlaceTypePlaceOfWorship: string;

declare let kGMSPlaceTypePlumber: string;

declare let kGMSPlaceTypePointOfInterest: string;

declare let kGMSPlaceTypePolice: string;

declare let kGMSPlaceTypePolitical: string;

declare let kGMSPlaceTypePostBox: string;

declare let kGMSPlaceTypePostOffice: string;

declare let kGMSPlaceTypePostalCode: string;

declare let kGMSPlaceTypePostalCodePrefix: string;

declare let kGMSPlaceTypePostalCodeSuffix: string;

declare let kGMSPlaceTypePostalTown: string;

declare let kGMSPlaceTypePremise: string;

declare let kGMSPlaceTypePrimarySchool: string;

declare let kGMSPlaceTypeRealEstateAgency: string;

declare let kGMSPlaceTypeRestaurant: string;

declare let kGMSPlaceTypeRoofingContractor: string;

declare let kGMSPlaceTypeRoom: string;

declare let kGMSPlaceTypeRoute: string;

declare let kGMSPlaceTypeRvPark: string;

declare let kGMSPlaceTypeSchool: string;

declare let kGMSPlaceTypeSecondarySchool: string;

declare let kGMSPlaceTypeShoeStore: string;

declare let kGMSPlaceTypeShoppingMall: string;

declare let kGMSPlaceTypeSpa: string;

declare let kGMSPlaceTypeStadium: string;

declare let kGMSPlaceTypeStorage: string;

declare let kGMSPlaceTypeStore: string;

declare let kGMSPlaceTypeStreetAddress: string;

declare let kGMSPlaceTypeStreetNumber: string;

declare let kGMSPlaceTypeSublocality: string;

declare let kGMSPlaceTypeSublocalityLevel1: string;

declare let kGMSPlaceTypeSublocalityLevel2: string;

declare let kGMSPlaceTypeSublocalityLevel3: string;

declare let kGMSPlaceTypeSublocalityLevel4: string;

declare let kGMSPlaceTypeSublocalityLevel5: string;

declare let kGMSPlaceTypeSubpremise: string;

declare let kGMSPlaceTypeSubwayStation: string;

declare let kGMSPlaceTypeSupermarket: string;

declare let kGMSPlaceTypeSynagogue: string;

declare let kGMSPlaceTypeTaxiStand: string;

declare let kGMSPlaceTypeTouristAttraction: string;

declare let kGMSPlaceTypeTownSquare: string;

declare let kGMSPlaceTypeTrainStation: string;

declare let kGMSPlaceTypeTransitStation: string;

declare let kGMSPlaceTypeTravelAgency: string;

declare let kGMSPlaceTypeUniversity: string;

declare let kGMSPlaceTypeVeterinaryCare: string;

declare let kGMSPlaceTypeZoo: string;

declare let kGMSPlacesErrorDomain: string;
